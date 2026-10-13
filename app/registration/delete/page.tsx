'use client';

import { Api, CountryIPAddress, Sms } from '@/lib/helper';
import axios from 'axios';
import { FormEvent, useCallback, useMemo, useState } from 'react';
import {
    FiAlertTriangle,
    FiArrowUpRight,
    FiCheck,
    FiLoader,
    FiPhone,
    FiTrash2,
    FiUser,
} from 'react-icons/fi';
import PhoneInput, { CountryData } from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import OtpInput from 'react-otp-input';

const SUPPORT_EMAIL = 'support@jcnumeroapp.org';

const API_CONFIG = {
    sendOtp: 'user/send-otp',
    fetchProfile: 'user/login-phone',
    deleteAccount: 'user/delete-account',
} as const;

const OTP_LENGTH = 6;
// bg-[#CE82B5] rounded text-white transition buttonHover buttonBackground
// Shared button styles — keeps every action button consistent and DRY.
const BTN_BASE =
    'flex w-full items-center justify-center gap-2 rounded-md px-5 py-3.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed';
const BTN_PRIMARY = `${BTN_BASE} bg-[#CE82B5] text-white buttonHover buttonBackground`;
const BTN_DANGER = `${BTN_BASE} bg-[#a24f42] text-white hover:bg-[#8b4136] focus:ring-[#a24f42] disabled:bg-[#9aada4]`;

// Phone validation — mirrors the rest of the app (contact-us / waitlist).
const PHONE_VALIDATION = {
    MIN_LENGTH: 7,
    MAX_LENGTH: 15,
    INVALID_PATTERNS: [/^(\d)\1+$/, /(\d)\1{4,}/, /^(\d{2,3})\1+$/],
    DUMMY_NUMBERS: ['1234567890', '0123456789', '1231231234', '9876543210'],
};

// Sensitive fields that should never be rendered in the profile review.
const EXCLUDED_PROFILE_KEYS = new Set([
    'password',
    'token',
    'otp',
    '__v',
    'refreshToken',
    'accessToken',
]);

type Step = 'form' | 'otp' | 'review' | 'done';

/** Convert camelCase / snake_case / kebab-case keys into readable labels. */
const humanize = (key: string): string => key
    .replace(/[_-]+/g, ' ')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());

/** Render any profile value safely (object, boolean, string, number…). */
const formatValue = (value: unknown): string => {
    if (value === null || value === undefined || value === '') return '';
    if (typeof value === 'boolean') return value ? 'Yes' : 'No';
    if (typeof value === 'object') return JSON.stringify(value);
    return String(value);
};

const getErrorMessage = (error: unknown): string => {
    if (axios.isAxiosError(error)) {
        return error.response?.data?.message || error.message;
    }
    return 'Something went wrong. Please try again.';
};

/** Pull the profile object out of an API response (defensive). */
const extractProfile = (data: unknown): Record<string, unknown> | null => {
    if (!data || typeof data !== 'object') return null;
    const record = data as Record<string, unknown>;
    const candidate = record.data ?? record.user ?? record.profile;
    if (candidate && typeof candidate === 'object' && !Array.isArray(candidate)) {
        return candidate as Record<string, unknown>;
    }
    return null;
};

export default function DeleteAccountPage() {
    const defaultCountry = CountryIPAddress();

    const [otp, setOtp] = useState('');

    const [step, setStep] = useState<Step>('form');
    const [sendingOtp, setSendingOtp] = useState(false);
    const [verifyingOtp, setVerifyingOtp] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [confirmed, setConfirmed] = useState(false);
    const [reason, setReason] = useState('');
    const [profile, setProfile] = useState<Record<string, unknown> | null>(null);

    const [token, setToken] = useState('');

    const [formData, setFormData] = useState({
        phoneLocal: '',
        phoneFullValue: '',
        countryCode: '',
    });

    const handleCountry = useCallback((value: string, data: CountryData) => {
        const dial = data?.dialCode || '';
        const codelength = dial.length;
        const local = value?.length > codelength ? value.slice(codelength) : '';

        setFormData((prev) => ({
            ...prev,
            countryCode: dial,
            phoneFullValue: value || '',
            phoneLocal: local,
        }));
    }, []);

    const validatePhone = useCallback((local: string): boolean => {
        const digits = local.replace(/\D/g, '');

        if (!digits) {
            Sms('error', 'Mobile Number is required');
            return false;
        }
        if (digits !== local) {
            Sms('error', 'Mobile Number must contain digits only');
            return false;
        }
        if (
            digits.length < PHONE_VALIDATION.MIN_LENGTH ||
            digits.length > PHONE_VALIDATION.MAX_LENGTH
        ) {
            Sms(
                'error',
                `Enter a correct Mobile Number (${PHONE_VALIDATION.MIN_LENGTH}–${PHONE_VALIDATION.MAX_LENGTH} digits)`,
            );
            return false;
        }
        if (PHONE_VALIDATION.DUMMY_NUMBERS.includes(digits)) {
            Sms('error', 'Please provide a valid Mobile Number');
            return false;
        }
        if (PHONE_VALIDATION.INVALID_PATTERNS.some((pattern) => pattern.test(digits))) {
            Sms('error', 'Please provide a valid Mobile Number');
            return false;
        }
        return true;
    }, []);

    // Step 1: send an OTP to the phone number.
    // If the backend already returns the profile (OTP not required), skip straight to review.
    const sendOtp = useCallback(
        async (event?: FormEvent<HTMLFormElement>) => {
            event?.preventDefault();

            const local = formData.phoneLocal.trim();
            if (!validatePhone(local)) return;

            setSendingOtp(true);
            try {
                const { data } = await axios.post(`${Api}${API_CONFIG.sendOtp}`, {
                    phone: local,
                    countryCode: formData.countryCode,
                });

                if (!data?.success) {
                    Sms('error', data?.message || 'We could not send the OTP. Please try again.');
                    return;
                }

                const profileData = extractProfile(data);
                if (profileData) {
                    // OTP was not required — the profile came back directly.
                    setProfile(profileData);
                    setStep('review');
                } else {
                    // OTP sent — ask the user to enter it.
                    setOtp('');
                    setStep('otp');
                    Sms('success', data?.message || 'OTP sent to your number');
                }
            } catch (error) {
                Sms('error', getErrorMessage(error));
            } finally {
                setSendingOtp(false);
            }
        },
        [formData, validatePhone],
    );

    // Step 2: verify the OTP, then load the full profile.
    const verifyOtp = useCallback(
        async (event?: FormEvent<HTMLFormElement>) => {
            event?.preventDefault();

            if (otp.length !== OTP_LENGTH) {
                Sms('error', `Enter the ${OTP_LENGTH}-digit code`);
                return;
            }

            setVerifyingOtp(true);
            try {
                // Verify the OTP and fetch the full profile in one call.
                const { data } = await axios.post(`${Api}${API_CONFIG.fetchProfile}`, {
                    phone: formData.phoneLocal.trim(),
                    countryCode: formData.countryCode,
                    os: 'android',
                    otp,
                });

                if (data?.success) {
                    const user = data?.user;
                    if (user) {
                        setToken(data.accessToken)
                        // user.phone = user.countryCode + "-" + user.phone
                        setProfile(user);
                        setStep('review');
                    }
                } else {
                    Sms(
                        'error',
                        data?.message || 'We could not find an account with this number.',
                    );
                }
            } catch (error) {
                Sms('error', getErrorMessage(error));
            } finally {
                setVerifyingOtp(false);
            }
        },
        [otp, formData],
    );

    // Build an ordered, readable list of profile rows for the review step.
    const profileRows = useMemo(() => {
        if (!profile) return [];

        // Only these fields are shown in the review. Everything else is hidden.
        const allowedKeys = ['fullName', 'email', 'dob'];

        return allowedKeys
            .filter((key) => key in profile && !EXCLUDED_PROFILE_KEYS.has(key))
            .map((key) => ({ key, value: formatValue(profile[key]) }))
            .filter((row) => row.value !== '');
    }, [profile]);

    // Step 3: send the confirmation + deletion request to the API.
    const confirmDelete = useCallback(async () => {
        console.log(token)
        if (!confirmed) {
            Sms('error', 'Please confirm that you understand the consequences before deleting.');
            return;
        }

        setDeleting(true);
        try {
            const { data } = await axios.delete(`${Api}${API_CONFIG.deleteAccount}`, {
                data: {
                    phone: formData.phoneLocal.trim(),
                    countryCode: formData.countryCode,
                    reason: reason.trim(),
                    confirmed: true,
                },
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${token}`
                },
            });

            if (data?.success) {
                Sms('success', data?.message || 'Your account has been deleted.');
                setStep('done');
            } else {
                Sms('error', data?.message || 'We could not delete the account. Please try again.');
            }
        } catch (error) {
            Sms('error', getErrorMessage(error));
        } finally {
            setDeleting(false);
        }
    }, [confirmed, reason, formData, profile, token]);

    const resetAll = useCallback(() => {
        setStep('form');
        setProfile(null);
        setConfirmed(false);
        setReason('');
        setOtp('');
        setFormData({ phoneLocal: '', phoneFullValue: '', countryCode: '' });
    }, []);

    return (
        <main className="min-h-[70vh] bg-[#f5f7f5] px-5 py-12 text-[#182b25] sm:px-8 sm:py-16">
            <div className="mx-auto max-w-5xl">
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-12">

                    {/* ------------------------------------------------------ */}
                    {/* Left — explanation                                     */}
                    {/* ------------------------------------------------------ */}
                    <section className="pt-1">
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#490099]">
                            Account support
                        </p>
                        <h1 className="max-w-lg text-3xl font-bold leading-tight text-[#183c30] sm:text-4xl">
                            Delete your account
                        </h1>

                        <p className="mt-5 max-w-xl text-base leading-7 text-[#53645d]">
                            Enter the phone number linked to your JC Numero App account. We will
                            show your profile for confirmation, and then delete your account and
                            associated data immediately.
                        </p>

                        <div className="mt-8 border-l-2 border-[#d7a294] pl-5">
                            <h2 className="font-semibold text-[#183c30]">What happens next</h2>
                            <ol className="mt-4 space-y-4 text-sm leading-6 text-[#53645d]">
                                <li className="flex gap-3">
                                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e4eee8] text-xs font-bold text-[#490099]">
                                        1
                                    </span>
                                    <span>Enter your phone number and verify it with a one-time password (OTP).</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e4eee8] text-xs font-bold text-[#490099]">
                                        2
                                    </span>
                                    <span>Review the details and confirm that you understand the consequences.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e4eee8] text-xs font-bold text-[#490099]">
                                        3
                                    </span>
                                    <span>Your account and associated data are deleted immediately.</span>
                                </li>
                            </ol>
                        </div>

                        <p className="mt-7 text-sm leading-6 text-[#53645d]">
                            This action is permanent and cannot be undone.
                        </p>
                    </section>

                    {/* ------------------------------------------------------ */}
                    {/* Right — form / review / success                        */}
                    {/* ------------------------------------------------------ */}
                    <section
                        aria-labelledby="request-form-title"
                        className="rounded-lg border border-[#e0e7e2] bg-white p-6 shadow-[0_16px_50px_rgba(24,60,48,0.07)] sm:p-8"
                    >
                        {step === 'form' && (
                            <>
                                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#f8ebe7] text-[#a24f42]">
                                    <FiTrash2 aria-hidden="true" className="text-xl" />
                                </div>
                                <h2 id="request-form-title" className="text-xl font-bold text-[#183c30]">
                                    Find your account
                                </h2>
                                <p className="mt-2 text-sm leading-6 text-[#64756e]">
                                    Enter the phone number linked to your JC Numero App account so we
                                    can verify it with a one-time password.
                                </p>

                                <form onSubmit={sendOtp} className="mt-7 space-y-5">
                                    <div>
                                        <label
                                            htmlFor="account-phone"
                                            className="mb-2 block text-sm font-semibold text-[#263d34]"
                                        >
                                            Account Phone Number{' '}
                                            <span className="text-[#a24f42]">*</span>
                                        </label>

                                        <PhoneInput
                                            country={defaultCountry || 'in'}
                                            value={formData.phoneFullValue}
                                            onChange={(value, data) =>
                                                handleCountry(value, data as CountryData)
                                            }
                                            enableSearch={true}
                                            countryCodeEditable={false}
                                            disabled={sendingOtp}
                                            inputStyle={{ width: '100%', fontSize: '16px' }}
                                            placeholder="Enter your mobile number"
                                        />
                                    </div>

                                    <button
                                        className={BTN_PRIMARY}
                                        type="submit"
                                        disabled={sendingOtp}
                                    >
                                        {sendingOtp ? (
                                            <>
                                                <FiLoader aria-hidden="true" className="animate-spin text-lg" />
                                                Sending OTP…
                                            </>
                                        ) : (
                                            <>
                                                Send OTP
                                                <FiArrowUpRight aria-hidden="true" className="text-lg" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </>
                        )}

                        {step === 'otp' && (
                            <>
                                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#e4eee8] text-[#490099]">
                                    <FiPhone aria-hidden="true" className="text-xl" />
                                </div>
                                <h2 id="request-form-title" className="text-xl font-bold text-[#183c30]">
                                    Verify your number
                                </h2>
                                <p className="mt-2 text-sm leading-6 text-[#64756e]">
                                    Enter the {OTP_LENGTH}-digit code sent to{' '}
                                    <span className="font-semibold text-[#263d34]">
                                        +{formData.countryCode} {formData.phoneLocal}
                                    </span>
                                    .
                                </p>

                                <form onSubmit={verifyOtp} className="mt-7 space-y-6">
                                    <div className="mx-auto w-full max-w-xs">
                                        <OtpInput
                                            value={otp}
                                            onChange={setOtp}
                                            numInputs={OTP_LENGTH}
                                            shouldAutoFocus
                                            inputType="tel"
                                            renderSeparator={null}
                                            renderInput={(props) => (
                                                <input
                                                    {...props}
                                                    inputMode="numeric"
                                                    autoComplete="one-time-code"
                                                    className="h-11 w-11 shrink-0 rounded-lg border border-[#cbd8d0] bg-white text-center text-lg font-bold text-[#182b25] outline-none transition focus:border-[#490099] focus:ring-2 focus:ring-[#490099]/20 sm:h-12 sm:w-12"
                                                    style={{ textAlign: 'center' }}
                                                />
                                            )}
                                            containerStyle="flex items-center justify-between"
                                        />
                                    </div>

                                    <button
                                        className={BTN_PRIMARY}
                                        type="submit"
                                        disabled={verifyingOtp || otp.length !== OTP_LENGTH}
                                    >
                                        {verifyingOtp ? (
                                            <>
                                                <FiLoader aria-hidden="true" className="animate-spin text-lg" />
                                                Verifying…
                                            </>
                                        ) : (
                                            <>
                                                Verify &amp; Continue
                                                <FiArrowUpRight aria-hidden="true" className="text-lg" />
                                            </>
                                        )}
                                    </button>

                                    <div className="flex items-center justify-between text-sm">
                                        <button
                                            type="button"
                                            onClick={() => sendOtp()}
                                            disabled={sendingOtp || verifyingOtp}
                                            className="font-semibold text-[#1d6048] underline decoration-[#a8c2b4] underline-offset-4 hover:text-[#174b38] disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            Resend code
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setStep('form');
                                                setOtp('');
                                            }}
                                            disabled={verifyingOtp}
                                            className="font-semibold text-[#53645d] hover:text-[#263d34] disabled:cursor-not-allowed"
                                        >
                                            Change number
                                        </button>
                                    </div>
                                </form>
                            </>
                        )}

                        {step === 'review' && (
                            <>
                                <div className="mb-6 flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e4eee8] text-[#490099]">
                                        <FiUser aria-hidden="true" className="text-xl" />
                                    </div>
                                    <div>
                                        <h2 id="request-form-title" className="text-xl font-bold text-[#183c30]">
                                            Confirm your account
                                        </h2>
                                        <p className="text-sm text-[#64756e]">
                                            Review your details before deleting.
                                        </p>
                                    </div>
                                </div>

                                {/* Found-by key (phone number) */}
                                <div className="mb-5 flex items-center gap-3 rounded-md bg-[#f5f7f5] px-4 py-3">
                                    <FiPhone aria-hidden="true" className="text-[#490099]" />
                                    <span className="text-sm font-semibold text-[#263d34]">
                                        +{formData.countryCode} {formData.phoneLocal}
                                    </span>
                                </div>

                                {/* Full profile data */}
                                <div className="mb-6 max-h-72 max-w-lg overflow-y-auto rounded-md border border-[#e0e7e2]">
                                    {profileRows.length > 0 ? (
                                        <dl className="divide-y divide-[#edf1ee]">
                                            {profileRows.map((row) => (
                                                <div
                                                    key={row.key}
                                                    className="flex items-start justify-between gap-4 px-4 py-2.5"
                                                >
                                                    <dt className="shrink-0 text-sm font-semibold text-[#53645d]">
                                                        {humanize(row.key)}
                                                    </dt>
                                                    <dd className="min-w-0 flex-1 wrap-break-word text-right text-sm text-[#182b25]">
                                                        {row.value}
                                                    </dd>
                                                </div>
                                            ))}
                                        </dl>
                                    ) : (
                                        <p className="px-4 py-4 text-sm text-[#64756e]">
                                            No additional profile details were returned.
                                        </p>
                                    )}
                                </div>

                                {/* Reason */}
                                <div className="mb-5">
                                    <label
                                        htmlFor="deletion-reason"
                                        className="mb-2 block text-sm font-semibold text-[#263d34]"
                                    >
                                        Reason{' '}
                                        <span className="font-normal text-[#789087]">(optional)</span>
                                    </label>
                                    <select
                                        id="deletion-reason"
                                        className="w-full rounded-md border border-[#cbd8d0] bg-white px-3 py-3 text-sm text-[#263d34] outline-none transition focus:border-[#490099] focus:ring-2 focus:ring-[#490099]/20"
                                        value={reason}
                                        onChange={(event) => setReason(event.target.value)}
                                    >
                                        <option value="">Choose a reason</option>
                                        <option value="I no longer use the app">I no longer use the app</option>
                                        <option value="I created another account">I created another account</option>
                                        <option value="I have a privacy concern">I have a privacy concern</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                {/* Confirmation checkbox */}
                                <label className="flex cursor-pointer items-start gap-3 rounded-md bg-[#f5f7f5] p-4 text-sm leading-6 text-[#53645d]">
                                    <input
                                        className="mt-1 h-4 w-4 shrink-0 accent-[#490099]"
                                        type="checkbox"
                                        checked={confirmed}
                                        onChange={(event) => setConfirmed(event.target.checked)}
                                    />
                                    <span className="flex gap-2">
                                        <FiCheck aria-hidden="true" className="mt-1 shrink-0 text-[#490099]" />
                                        I understand my account and associated data will be permanently
                                        deleted immediately and cannot be recovered.
                                    </span>
                                </label>

                                <div className="mt-6 space-y-3">
                                    <button
                                        className={BTN_DANGER}
                                        type="button"
                                        onClick={confirmDelete}
                                        disabled={deleting || !confirmed}
                                    >
                                        {deleting ? (
                                            <>
                                                <FiLoader aria-hidden="true" className="animate-spin text-lg" />
                                                Deleting account…
                                            </>
                                        ) : (
                                            <>
                                                <FiTrash2 aria-hidden="true" className="text-lg" />
                                                Delete my account
                                            </>
                                        )}
                                    </button>
                                </div>
                            </>
                        )}

                        {step === 'done' && (
                            <div className="text-center">
                                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#e4eee8] text-[#490099]">
                                    <FiCheck aria-hidden="true" className="text-3xl" />
                                </div>
                                <h2 id="request-form-title" className="text-xl font-bold text-[#183c30]">
                                    Account deleted
                                </h2>
                                <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[#64756e]">
                                    Your account and associated data have been deleted. If you change
                                    your mind, you will need to create a new account.
                                </p>

                                <button
                                    className={`${BTN_PRIMARY} mt-7`}
                                    type="button"
                                    onClick={resetAll}
                                >
                                    Done
                                </button>
                            </div>
                        )}
                    </section>

                    {/* Help note — aligned to the form column */}
                    {step !== 'done' && (
                        <div className="flex items-start gap-2 text-sm text-[#64756e] lg:col-start-2">
                            <FiAlertTriangle aria-hidden="true" className="mt-0.5 shrink-0 text-[#a24f42]" />
                            <p>
                                Need help?{' '}
                                <a
                                    className="font-semibold text-[#1d6048] underline decoration-[#a8c2b4] underline-offset-4 hover:text-[#174b38]"
                                    href={`mailto:${SUPPORT_EMAIL}`}
                                >
                                    Email support
                                </a>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
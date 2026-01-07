// app/contexts/AlertContext.tsx
'use client';

import { createContext, useContext, useState, useRef, ReactNode } from 'react';

export interface AlertAction {
  text: string;
  variant?: 'primary' | 'secondary' | 'danger';
  callback?: (inputValue?: string) => void;
}

export interface AlertConfig {
  title: string;
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info' | 'confirm';
  actions?: AlertAction[];
  autoClose?: number; // milliseconds
  showInput?: boolean;
  inputPlaceholder?: string;
}

interface AlertContextType {
  showAlert: (config: AlertConfig) => void;
  closeAlert: () => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlert must be used within AlertProvider');
  }
  return context;
};

export function AlertProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [config, setConfig] = useState<AlertConfig | null>(null);
  const timerRef = useRef<NodeJS.Timeout>(undefined);

  const showAlert = (alertConfig: AlertConfig) => {
    setConfig(alertConfig);
    setIsOpen(true);

    if (alertConfig.autoClose) {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        closeAlert();
      }, alertConfig.autoClose);
    }
  };

  const closeAlert = () => {
    setIsOpen(false);
    clearTimeout(timerRef.current);
    setTimeout(() => setConfig(null), 300); // Wait for animation
  };

  return (
    <AlertContext.Provider value={{ showAlert, closeAlert }}>
      {children}
      {isOpen && config && (
        <AlertBox config={config} onClose={closeAlert} />
      )}
    </AlertContext.Provider>
  );
}

// Alert Box Component
function AlertBox({ config, onClose }: { config: AlertConfig; onClose: () => void }) {
  const [inputValue, setInputValue] = useState('');

  const getIcon = () => {
    switch (config.type) {
      case 'success':
        return (
          <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        );
      case 'error':
        return (
          <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        );
      case 'warning':
        return (
          <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        );
      case 'info':
        return (
          <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const defaultActions: AlertAction[] = config.actions || [
    { text: 'OK', variant: 'primary', callback: onClose }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Alert Box */}
      <div className="relative bg-white  rounded-lg shadow-2xl max-w-md w-full mx-4 animate-scaleIn">
        {/* Header with Icon */}
        {config.type && (
          <div className="flex items-center gap-3 p-6 pb-4">
            {getIcon()}
            <h2 className="text-xl font-semibold text-gray-900 ">
              {config.title}
            </h2>
          </div>
        )}
        
        {/* Content */}
        <div className="px-6 pb-4">
          {!config.type && (
            <h2 className="text-xl font-semibold text-gray-900  mb-2">
              {config.title}
            </h2>
          )}
          <p className="text-gray-600 ">
            {config.message}
          </p>
          
          {/* Input Field */}
          {config.showInput && (
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={config.inputPlaceholder || 'Enter value...'}
              className="mt-4 w-full px-4 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent  outline-none"
              autoFocus
            />
          )}
        </div>
        
        {/* Actions */}
        <div className="flex gap-2 justify-end p-6 pt-4 border-t border-gray-200 ">
          {defaultActions.map((action, index) => (
            <button
              key={index}
              onClick={() => {
                action.callback?.(inputValue);
                if (!action.callback || config.type !== 'confirm') {
                  onClose();
                }
              }}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                action.variant === 'primary'
                    ? 'bg-[#CE82B5] px-2 py-1 rounded text-white transition buttonHover buttonBackground'
                    : action.variant === 'danger'
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : action.variant === 'secondary'
                    ? 'bg-gray-200 hover:bg-gray-300  text-gray-900 '
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              {action.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

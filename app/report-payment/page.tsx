import ReportPayment from './ReportPayment'
import AuthGuard from '../components/AuthGuard'

export default function page() {
  return (
    <AuthGuard>
      <ReportPayment/>
    </AuthGuard>
  )
}

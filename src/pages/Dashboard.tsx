import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  BellIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon
} from '@heroicons/react/24/outline';

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');

  const trustScore = 87;
  const recentTransactions = [
    { id: 1, recipient: 'Rajesh Kumar', amount: 500, time: '2 min ago', score: 95, status: 'safe' },
    { id: 2, recipient: 'Zomato', amount: 340, time: '1 hour ago', score: 88, status: 'safe' },
    { id: 3, recipient: 'Unknown-9876543210', amount: 5000, time: '3 hours ago', score: 25, status: 'blocked' },
    { id: 4, recipient: 'Priya Sharma', amount: 1200, time: '5 hours ago', score: 92, status: 'safe' },
    { id: 5, recipient: 'Swiggy', amount: 280, time: 'Yesterday', score: 89, status: 'safe' }
  ];

  const alerts = [
    { id: 1, type: 'blocked', message: 'Blocked suspicious transaction of ₹5,000', time: '3 hours ago' },
    { id: 2, type: 'warning', message: 'New UPI ID detected: check-verify@paytm', time: '1 day ago' },
    { id: 3, type: 'safe', message: 'Successfully verified merchant: amazon.pay', time: '2 days ago' }
  ];

  const stats = [
    { label: 'Transactions Protected', value: '234', change: '+12%', trend: 'up' },
    { label: 'Fraud Attempts Blocked', value: '7', change: '-23%', trend: 'down' },
    { label: 'Money Saved', value: '₹12,450', change: '+45%', trend: 'up' },
    { label: 'Trust Score Average', value: '87/100', change: '+5%', trend: 'up' }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-success-600 bg-success-50';
    if (score >= 50) return 'text-warning-600 bg-warning-50';
    return 'text-danger-600 bg-danger-50';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'safe': return 'text-success-700 bg-success-100';
      case 'blocked': return 'text-danger-700 bg-danger-100';
      case 'warning': return 'text-warning-700 bg-warning-100';
      default: return 'text-gray-700 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-display font-bold text-white"
          >
            Security Dashboard
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-gray-300"
          >
            Real-time protection status and transaction monitoring
          </motion.p>
        </div>

        {/* Trust Score Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Current Trust Score</h2>
              <div className="flex space-x-2">
                {['24h', '7d', '30d'].map((period) => (
                  <button
                    key={period}
                    onClick={() => setSelectedPeriod(period)}
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                      selectedPeriod === period
                        ? 'bg-primary-100 text-primary-700'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-8">
              <div className="relative">
                <div className="w-32 h-32">
                  <svg className="transform -rotate-90 w-32 h-32">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-gray-200"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 56}`}
                      strokeDashoffset={`${2 * Math.PI * 56 * (1 - trustScore / 100)}`}
                      className="text-success-500 transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-success-600">{trustScore}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Excellent Security</h3>
                <p className="text-gray-600 mb-4">
                  Your account is well protected. All transactions are being monitored by AI.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-success-600">
                    <CheckCircleIcon className="h-5 w-5 mr-2" />
                    <span className="text-sm">Real-time protection active</span>
                  </div>
                  <div className="flex items-center text-success-600">
                    <ShieldCheckIcon className="h-5 w-5 mr-2" />
                    <span className="text-sm">All systems operational</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`flex items-center text-sm ${
                  stat.trend === 'up' ? 'text-success-600' : 'text-danger-600'
                }`}>
                  {stat.trend === 'up' ? (
                    <ArrowTrendingUpIcon className="h-4 w-4 mr-1" />
                  ) : (
                    <ArrowTrendingDownIcon className="h-4 w-4 mr-1" />
                  )}
                  {stat.change}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Transactions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Recent Transactions</h2>
              <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                View All
              </button>
            </div>
            
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      transaction.status === 'safe' ? 'bg-success-500' : 'bg-danger-500'
                    }`} />
                    <div>
                      <p className="font-medium text-gray-900">{transaction.recipient}</p>
                      <p className="text-sm text-gray-500">{transaction.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">₹{transaction.amount}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${getScoreColor(transaction.score)}`}>
                      {transaction.score}/100
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Security Alerts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="card"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Security Alerts</h2>
              <BellIcon className="h-5 w-5 text-gray-400" />
            </div>
            
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div key={alert.id} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getStatusColor(alert.type)}`}>
                    {alert.type === 'blocked' && <ExclamationTriangleIcon className="h-4 w-4" />}
                    {alert.type === 'warning' && <ClockIcon className="h-4 w-4" />}
                    {alert.type === 'safe' && <CheckCircleIcon className="h-4 w-4" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{alert.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-4 text-center text-primary-600 hover:text-primary-700 text-sm font-medium py-2">
              View All Alerts
            </button>
          </motion.div>
        </div>

        {/* Protection Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="card">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <ChatBubbleLeftRightIcon className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">SMS Guardian</h3>
                <p className="text-sm text-gray-500">Active • 47 messages scanned today</p>
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <PhoneIcon className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Call Protection</h3>
                <p className="text-sm text-gray-500">Active • 3 suspicious calls blocked</p>
              </div>
            </div>
          </div>
          
          <div className="card">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <ShieldCheckIcon className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">AI Engine</h3>
                <p className="text-sm text-gray-500">Online • Learning your patterns</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
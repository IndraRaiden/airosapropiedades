'use client';

import { Send } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Form = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('contact.form.title')}</h2>
      
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
              {t('contact.form.firstName')}
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder={t('contact.form.firstNamePlaceholder')}
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
              {t('contact.form.lastName')}
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder={t('contact.form.lastNamePlaceholder')}
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            {t('contact.form.email')}
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            placeholder={t('contact.form.emailPlaceholder')}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            {t('contact.form.phone')}
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            placeholder={t('contact.form.phonePlaceholder')}
          />
        </div>

        <div>
          <label htmlFor="property" className="block text-sm font-semibold text-gray-700 mb-2">
            {t('contact.form.property')}
          </label>
          <input
            type="text"
            id="property"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            placeholder={t('contact.form.propertyPlaceholder')}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            {t('contact.form.message')}
          </label>
          <textarea
            id="message"
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
            placeholder={t('contact.form.messagePlaceholder')}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          {t('contact.form.submit')}
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};

export default Form;

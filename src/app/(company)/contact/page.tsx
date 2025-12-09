"use client";

import { useTranslations } from 'next-intl';
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Clock, MessageCircle, Send, Building2 } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const t = useTranslations();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactMethods = [
    {
      icon: Mail,
      title: t('contact.emailUs'),
      description: t('contact.emailDesc'),
      detail: "gekomarketsmf@gmail.com",
      link: "mailto:gekomarketsmf@gmail.com",
    },
    {
      icon: Building2,
      title: t('contact.companyAddress'),
      description: t('contact.companyAddressDesc'),
      detail: "Bucuresti Sector 1, Str. Lamaiului, Nr.4, Camera Nr 1",
      link: "https://maps.google.com",
    },
    {
      icon: MapPin,
      title: t('contact.deliveryAddress'),
      description: t('contact.deliveryAddressDesc'),
      detail: "AFUMATI, Sos Bucuresti Urziceni nr 31 pavilion A parter spatiul 1 swr a, Jud. IF",
      link: "https://maps.google.com",
    },
    {
      icon: MessageCircle,
      title: t('contact.liveChat'),
      description: t('contact.liveChatDesc'),
      detail: t('contact.startConversation'),
      link: "#",
    },
  ];

  const faqs = [
    {
      question: "Do you sell furniture directly?",
      answer: "GEKO is a digital showroom and catalog platform. We provide detailed specifications and information to help you make informed decisions before visiting retailers.",
    },
    {
      question: "How can I get product pricing?",
      answer: "Product prices vary by retailer and location. We recommend contacting the retailer directly or visiting their website for current pricing information.",
    },
    {
      question: "Can you help me find a specific product?",
      answer: "Absolutely! Reach out to us with details about what you're looking for, and we'll do our best to help you find the perfect piece.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert(t('contact.formSuccess'));
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-stone-800 to-stone-900" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Send className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium">{t('contact.subtitle')}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              {t('contact.description')}
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-stone-50">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className="group p-6 rounded-2xl bg-white border border-stone-200 hover:border-stone-900 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-stone-100 group-hover:bg-amber-100 rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <method.icon className="w-6 h-6 text-stone-600 group-hover:text-amber-600 transition-colors" />
                </div>
                <h3 className="font-bold text-lg text-stone-900 mb-2">{method.title}</h3>
                <p className="text-sm text-stone-500 mb-3">{method.description}</p>
                <p className="text-sm font-medium text-stone-900 group-hover:text-amber-600 transition-colors">
                  {method.detail}
                </p>
              </a>
            ))}
          </div>

          {/* Contact Form & Info Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-stone-900 mb-4">
                  {t('contact.sendMessage')}
                </h2>
                <p className="text-stone-600">
                  {t('contact.sendMessageDesc')}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                    {t('contact.fullName')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-black focus:border-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900/10 transition-colors"
                    placeholder={t('contact.johnDoe')}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                    {t('contact.emailAddress')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-black focus:border-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900/10 transition-colors"
                    placeholder={t('contact.johnExample')}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-black mb-2">
                    {t('contact.subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-black focus:border-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900/10 transition-colors"
                    placeholder={t('contact.productInquiry')}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-black focus:border-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900/10 transition-colors resize-none"
                    placeholder={t('contact.tellUsHow')}
                    required
                  />
                </div>

                <Button type="submit" className="w-full gap-2">
                  <Send className="w-4 h-4" />
                  {t('contact.sendMessageButton')}
                </Button>
              </form>
            </div>

            {/* FAQ Section */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-stone-900 mb-4">
                  {t('contact.frequentlyAsked')}
                </h2>
                <p className="text-stone-600">
                  {t('contact.faqDescription')}
                </p>
              </div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-stone-50 border border-stone-100"
                  >
                    <h3 className="font-bold text-lg text-stone-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>

              {/* Company Details */}
              <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-amber-50 to-stone-50 border border-amber-100">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-lg">
                    <Building2 className="w-6 h-6 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-stone-900 mb-3">{t('contact.companyInformation')}</h3>
                    <div className="space-y-2 text-sm text-stone-600">
                      <p><span className="font-semibold">Company:</span> GEKO MARKETS M & F S.R.L.</p>
                      <p><span className="font-semibold">CIF:</span> RO50362139</p>
                      <p><span className="font-semibold">RC:</span> J2024013719407</p>
                      <p><span className="font-semibold">UID:</span> 1T4U2C2F8D289244</p>
                      <p className="mt-3 pt-3 border-t border-amber-200">
                        <span className="font-semibold">Headquarters:</span><br />
                        Bucuresti Sector 1, Municipiul Sector 1, Str. Lamaiului, Nr.4, Camera Nr 1
                      </p>
                      <p className="mt-2">
                        <span className="font-semibold">Delivery Address:</span><br />
                        AFUMATI, Sos Bucuresti Urziceni nr 31 pavilion A parter spatiul 1 swr a, Jud. IF
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stone-900 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('contact.readyToExplore')}
            </h2>
            <p className="text-xl text-stone-300 mb-8">
              {t('contact.readyToExploreDesc')}
            </p>
            <a
              href="/catalog"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-stone-900 font-semibold rounded-full hover:bg-stone-100 transition-all duration-200"
            >
              {t('about.browseCollection')}
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}


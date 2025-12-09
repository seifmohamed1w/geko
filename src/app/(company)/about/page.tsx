"use client";

import { useTranslations } from 'next-intl';
import { Container } from "@/components/layout/Container";
import { Leaf, Target, Users, Heart, Award, Sparkles } from "lucide-react";

export default function AboutPage() {
  const t = useTranslations();
  
  const values = [
    {
      icon: Leaf,
      title: t('about.sustainability'),
      description: t('about.sustainabilityDesc'),
    },
    {
      icon: Target,
      title: t('about.functionality'),
      description: t('about.functionalityDesc'),
    },
    {
      icon: Users,
      title: t('about.accessibility'),
      description: t('about.accessibilityDesc'),
    },
    {
      icon: Heart,
      title: t('about.craftsmanship'),
      description: t('about.craftsmanshipDesc'),
    },
  ];

  const stats = [
    { number: "5000+", label: t('about.curatedProducts') },
    { number: "50+", label: t('about.designPartners') },
    { number: "15K+", label: t('about.happyVisitors') },
    { number: "25", label: t('about.countriesReached') },
  ];
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-stone-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-stone-800 to-stone-900" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium">{t('about.est')}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              {t('about.title')}
            </h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              {t('about.mission')}
            </p>
          </div>
        </Container>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-b from-white to-stone-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
                {t('about.ourMission')}
              </h2>
              <div className="w-20 h-1 bg-amber-500 mx-auto mb-8"></div>
              <p className="text-lg text-stone-600 leading-relaxed">
                {t('about.missionDescription')}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-stone-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-stone-500 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              {t('about.ourValues')}
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              {t('about.valuesDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-stone-50 hover:bg-stone-900 hover:text-white transition-all duration-300 border border-stone-100 hover:border-stone-900"
              >
                <div className="w-14 h-14 bg-amber-100 group-hover:bg-amber-500 rounded-xl flex items-center justify-center mb-6 transition-colors">
                  <value.icon className="w-7 h-7 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-stone-600 group-hover:text-stone-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-stone-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              {t('about.ourJourney')}
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              {t('about.journeyDescription')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Note: Milestones are kept static as they're historical data */}
              <div className="flex gap-8 items-start group">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-2xl font-bold text-amber-600">2020</div>
                </div>
                <div className="relative flex-shrink-0 pt-1">
                  <div className="w-4 h-4 rounded-full bg-amber-500 ring-4 ring-amber-100"></div>
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-20 bg-stone-200"></div>
                </div>
                <div className="flex-1 pb-12">
                  <h3 className="text-xl font-bold text-stone-900 mb-2">The Beginning</h3>
                  <p className="text-stone-600 leading-relaxed">GEKO was founded with a vision to democratize access to quality furniture design.</p>
                </div>
              </div>
              <div className="flex gap-8 items-start group">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-2xl font-bold text-amber-600">2021</div>
                </div>
                <div className="relative flex-shrink-0 pt-1">
                  <div className="w-4 h-4 rounded-full bg-amber-500 ring-4 ring-amber-100"></div>
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-20 bg-stone-200"></div>
                </div>
                <div className="flex-1 pb-12">
                  <h3 className="text-xl font-bold text-stone-900 mb-2">Digital Expansion</h3>
                  <p className="text-stone-600 leading-relaxed">Launched our digital showroom featuring Scandinavian and minimalist collections.</p>
                </div>
              </div>
              <div className="flex gap-8 items-start group">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-2xl font-bold text-amber-600">2022</div>
                </div>
                <div className="relative flex-shrink-0 pt-1">
                  <div className="w-4 h-4 rounded-full bg-amber-500 ring-4 ring-amber-100"></div>
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-20 bg-stone-200"></div>
                </div>
                <div className="flex-1 pb-12">
                  <h3 className="text-xl font-bold text-stone-900 mb-2">Community Growth</h3>
                  <p className="text-stone-600 leading-relaxed">Reached 10,000 design enthusiasts and partnered with leading furniture brands.</p>
                </div>
              </div>
              <div className="flex gap-8 items-start group">
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-2xl font-bold text-amber-600">2024</div>
                </div>
                <div className="relative flex-shrink-0 pt-1">
                  <div className="w-4 h-4 rounded-full bg-amber-500 ring-4 ring-amber-100"></div>
                </div>
                <div className="flex-1 pb-12">
                  <h3 className="text-xl font-bold text-stone-900 mb-2">Sustainable Focus</h3>
                  <p className="text-stone-600 leading-relaxed">Committed to showcasing only eco-conscious and sustainably made furniture.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Award className="w-16 h-16 text-amber-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('about.readyToTransform')}
            </h2>
            <p className="text-xl text-stone-300 mb-8 leading-relaxed">
              {t('about.readyToTransformDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-stone-900 font-semibold rounded-full hover:bg-stone-100 transition-all duration-200"
              >
                {t('about.browseCollection')}
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-200"
              >
                {t('about.getInTouch')}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}


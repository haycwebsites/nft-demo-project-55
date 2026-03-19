import React from 'react';
import { useHayc } from '../hayc/config-context';

export function CTASection() {
  const { t, img, cp, config } = useHayc();
  const cta = config.siteConfig.cta || {};

  if (!cta.title?.en) return null;

  return (
    <section 
      className="cta-area cta-bg pt-120 pb-120" 
      style={{ backgroundImage: `url(${img(cta.backgroundImage || 'img/bg/cta_bg02.jpg')})` }}
    >
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-12">
            <div className="section-title cta-title wow fadeInLeft animated" data-animation="fadeInDown animated" data-delay=".2s">
              <p {...cp('cta.subtitle')}>{t(cta.subtitle || { el: '', en: "Don't hestitate to contact us" })}</p>
              <h2 {...cp('cta.title')}>{t(cta.title)}</h2>
              <h3 {...cp('cta.phone')}>{t(cta.phone || { el: '', en: '666 888 0000' })}</h3>
              <div className="cta-btn s-cta-btn wow fadeInRight animated mt-30" data-animation="fadeInDown animated" data-delay=".2s">
                <a href={cta.buttonLink || '#'} className="btn" {...cp('cta.buttonText')}>
                  {t(cta.buttonText || { el: '', en: 'Contact Us' })}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { useHayc } from '../hayc/config-context';

export function CtaSection() {
  const { t, img, cp, config } = useHayc();
  
  // Return null if no cta config
  if (!config.siteConfig.cta?.title?.en && !config.siteConfig.cta?.title?.el) {
    return null;
  }

  return (
    <section className="cta-area cta-bg pt-120 pb-120" style={{
      backgroundImage: `url(${img(config.siteConfig.cta?.backgroundImage || 'img/bg/cta_bg02.jpg')})`
    }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="cta-content text-center">
              {config.siteConfig.cta?.title && (
                <h2 className="cta-title mb-20" {...cp('cta.title')}>
                  {t(config.siteConfig.cta.title)}
                </h2>
              )}
              {config.siteConfig.cta?.description && (
                <p className="cta-desc mb-35" {...cp('cta.description')}>
                  {t(config.siteConfig.cta.description)}
                </p>
              )}
              {config.siteConfig.cta?.buttonText && config.siteConfig.cta?.buttonUrl && (
                <a href={config.siteConfig.cta.buttonUrl} className="btn btn-style" {...cp('cta.buttonText')}>
                  {t(config.siteConfig.cta.buttonText)}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
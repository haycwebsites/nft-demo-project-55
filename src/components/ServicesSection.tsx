import { useHayc } from '../hayc/config-context';

export function ServicesSection() {
  const { t, cp, config } = useHayc();
  const services = config.siteConfig.services || [];

  if (!services || services.length === 0) {
    return null;
  }

  return (
    <section id="services" className="services-area services-bg services-two pt-120 pb-90">
      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-30">
              <div className="s-single-services wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
                <div className="services-ico2">
                  <i className={service.icon}></i>
                </div>
                <div className="second-services-content2">
                  <h5 {...cp(`services.${index}.title`)}>
                    {t(service.title)}
                  </h5>
                  <p {...cp(`services.${index}.description`)}>
                    {t(service.description)}
                  </p>
                  <a href={service.link || '#'} {...cp(`services.${index}.linkText`)}>
                    {t(service.linkText || { el: 'Διαβάστε περισσότερα', en: 'Read More' })}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { useHayc } from '../hayc/config-context';

interface FeatureItem {
  title: { el: string; en: string };
  icon: string;
  isActive?: boolean;
}

interface FeaturesConfig {
  cta: {
    subtitle: { el: string; en: string };
    title: { el: string; en: string };
    phone: string;
    buttonText: { el: string; en: string };
  };
  features: {
    items: FeatureItem[];
  };
}

const defaultConfig: FeaturesConfig = {
  cta: {
    subtitle: { el: "Μη διστάσετε να επικοινωνήσετε μαζί μας", en: "Don't hesitate to contact us" },
    title: { el: "ΚΛΕΊΣΤΕ ΡΑΝΤΕΒΟΎ ΤΏΡΑ", en: "MAKE AN APPOINTMENT NOW" },
    phone: "666 888 0000",
    buttonText: { el: "Επικοινωνήστε μαζί μας", en: "Contact Us" }
  },
  features: {
    items: [
      { title: { el: "Κλιματισμός", en: "Air Conditioning" }, icon: "far fa-star-half" },
      { title: { el: "Τσιμεντένια Δάπεδα", en: "Concrete Flooring" }, icon: "far fa-star-half", isActive: true },
      { title: { el: "Ταράτσα", en: "Roof Terrace" }, icon: "far fa-star-half" },
      { title: { el: "Κρεβάτια", en: "Bedding" }, icon: "far fa-star-half" },
      { title: { el: "Καφετιέρα", en: "Coffee Pot" }, icon: "far fa-star-half" },
      { title: { el: "Εξωτερική Κουζίνα", en: "Outdoor Kitchen" }, icon: "far fa-star-half" },
      { title: { el: "Μπαλκόνι", en: "Balcony" }, icon: "far fa-star-half" },
      { title: { el: "Φούρνος Μικροκυμάτων", en: "Microwave" }, icon: "far fa-star-half" },
      { title: { el: "Βεράντα", en: "Terrace" }, icon: "far fa-star-half" }
    ]
  }
};

export default function FeaturesSection() {
  const { t, config, cp } = useHayc();
  const featuresConfig = (config.siteConfig as any)?.features || defaultConfig;

  if (!featuresConfig.cta.title.en && !featuresConfig.features.items.length) {
    return null;
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-12">
            <div className="section-title cta-title wow fadeInLeft animated" data-animation="fadeInDown animated" data-delay=".2s">
              <p {...cp('features.cta.subtitle')}>{t(featuresConfig.cta.subtitle)}</p>
              <h2 {...cp('features.cta.title')}>{t(featuresConfig.cta.title)}</h2>
              <h3 {...cp('features.cta.phone')}>{featuresConfig.cta.phone}</h3>
              <div className="cta-btn s-cta-btn wow fadeInRight animated mt-30" data-animation="fadeInDown animated" data-delay=".2s">
                <a href="#" className="btn" {...cp('features.cta.buttonText')}>{t(featuresConfig.cta.buttonText)}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <section id="services" className="services-area services-bg services-two pt-120 pb-90">
        <div className="container">
          <div className="row">
            {featuresConfig.features.items.map((item: FeatureItem, index: number) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className={`s-single-services ${item.isActive ? 'active' : ''} wow fadeInUp animated`} data-animation="fadeInDown animated" data-delay=".2s">
                  <div className="second-services-content">
                    <h5 {...cp(`features.features.items.${index}.title`)}>{t(item.title)}</h5>
                  </div>
                  <div className="services-icon">
                    <i className={item.icon} {...cp(`features.features.items.${index}.icon`)}></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
import { useHayc } from '../hayc/config-context';

export default function CounterSection() {
  const { t, img, cp, config } = useHayc();
  const section = config.siteConfig;

  // Don't render if no counter data configured
  if (!section.counter?.items?.length) return null;

  return (
    <div 
      className="counter-area pt-120 pb-90" 
      style={{ backgroundImage: `url(${img(section.counter.backgroundImage || 'img/bg/count-bg.jpg')})`, backgroundSize: 'cover' }}
      {...cp('counter')}
    >
      <div className="container">
        <div className="row">
          {section.counter.items.map((item, index) => (
            <div key={index} className="col-lg-3 col-sm-6">
              <div className="single-counter text-center mb-30 wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
                <i className={item.icon} {...cp(`counter.items.${index}.icon`)}></i>
                <div className="counter p-relative">
                  <span className="count" {...cp(`counter.items.${index}.count`)}>{item.count}</span>
                </div>
                <p {...cp(`counter.items.${index}.label`)}>{t(item.label)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
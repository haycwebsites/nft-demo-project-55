import { useHayc } from '../hayc/config-context';

export function BreadcrumbSection() {
  const { t, img, cp, config } = useHayc();
  const cfg = config.siteConfig;

  // Don't render if no title is configured
  if (!cfg.breadcrumb?.title?.en && !cfg.breadcrumb?.title?.el) {
    return null;
  }

  return (
    <section 
      className="breadcrumb-area d-flex align-items-center" 
      style={{ backgroundImage: `url(${img(cfg.breadcrumb?.backgroundImage || 'img/testimonial/test-bg.jpg')})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
            <div className="breadcrumb-wrap text-center">
              <div className="breadcrumb-title mb-30">
                <h2 {...cp('breadcrumb.title')}>
                  {t(cfg.breadcrumb?.title || { el: '', en: '' })}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { useHayc } from '../hayc/config-context';

export function ContactSection() {
  const { t, img, cp, config } = useHayc();
  const { contact } = config.siteConfig;

  if (!contact?.title?.en) return null;

  return (
    <>
      <section className="apartments pt-120 pb-90" style={{background:'#f5f5f5'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center pl-40 pr-40 mb-80 wow fadeInDown animated" data-animation="fadeInDown animated" data-delay=".2s">
                <span {...cp('contact.subtitle')}>{t(contact.subtitle)}</span>
                <h2 {...cp('contact.title')}>{t(contact.title)}</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="availability-section">
                <div className="availability-table">
                  <table className="table text-center">
                    <thead>
                      <tr>
                        <th scope="col" {...cp('contact.table.headers.residence')}>{t(contact.table.headers.residence)}</th>
                        <th scope="col" {...cp('contact.table.headers.bedBath')}>{t(contact.table.headers.bedBath)}</th>
                        <th scope="col" {...cp('contact.table.headers.sqFt')}>{t(contact.table.headers.sqFt)}</th>
                        <th scope="col" {...cp('contact.table.headers.salePrice')}>{t(contact.table.headers.salePrice)}</th>
                        <th scope="col" {...cp('contact.table.headers.rentPrice')}>{t(contact.table.headers.rentPrice)}</th>
                        <th scope="col" {...cp('contact.table.headers.floorPlan')}>{t(contact.table.headers.floorPlan)}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contact.table.rows.map((row, index) => (
                        <tr key={index}>
                          <td className="name" {...cp(`contact.table.rows.${index}.residence`)}>{t(row.residence)}</td>
                          <td {...cp(`contact.table.rows.${index}.bedBath`)}>{t(row.bedBath)}</td>
                          <td {...cp(`contact.table.rows.${index}.sqFt`)}>{t(row.sqFt)}</td>
                          <td className="price" {...cp(`contact.table.rows.${index}.salePrice`)}>{t(row.salePrice)}</td>
                          <td className="price" {...cp(`contact.table.rows.${index}.rentPrice`)}>{t(row.rentPrice)}</td>
                          <td>
                            <a className="btn popup-image" href={img(row.floorPlan)} data-elementor-open-lightbox="yes" {...cp(`contact.table.rows.${index}.viewButton`)}>
                              {t(row.viewButton)}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services-area services-bg services-two pt-120 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center pl-40 pr-40 mb-80 wow fadeInDown animated" data-animation="fadeInDown animated" data-delay=".2s">
                <span {...cp('contact.neighborhoods.subtitle')}>{t(contact.neighborhoods.subtitle)}</span>
                <h2 {...cp('contact.neighborhoods.title')}>{t(contact.neighborhoods.title)}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
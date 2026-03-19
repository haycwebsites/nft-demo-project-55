import { useHayc } from '../hayc/config-context';

export function BrandSection() {
  const { t, img, cp } = useHayc();

  const brands = [
    { image: '/img/brand/c-logo1.png', alt: 'Brand Logo 1' },
    { image: '/img/brand/c-logo2.png', alt: 'Brand Logo 2' },
    { image: '/img/brand/c-logo3.png', alt: 'Brand Logo 3' },
    { image: '/img/brand/c-logo4.png', alt: 'Brand Logo 4' },
    { image: '/img/brand/c-logo5.png', alt: 'Brand Logo 5' },
    { image: '/img/brand/c-logo6.png', alt: 'Brand Logo 6' },
    { image: '/img/brand/c-logo1.png', alt: 'Brand Logo 1' },
  ];

  return (
    <div className="brand-area pt-60 pb-60" style={{ backgroundColor: '#d29751' }}>
      <div className="container">
        <div className="row brand-active">
          {brands.map((brand, index) => (
            <div key={index} className="col-xl-2">
              <div className="single-brand" {...cp(`brand.items.${index}`)}>
                <img src={img(brand.image)} alt={brand.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
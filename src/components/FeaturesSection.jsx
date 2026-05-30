import {useEffect, useRef, useState} from 'react';
import imgRedSulawesi from '../assets/Red-Sulawesi-Bag.png';
import imgUrigacheffe from '../assets/Urigacheffe-Bag.png';
import imgTanzaniaPeaberry from '../assets/Tanzania-Peaberry-Bag.png';
import imgPanamaGeisha from '../assets/Panama-Geisha.png';
import imgVietnameserobusta from '../assets/Vietnamese-Robusta.png';
import imgBrazilianSantos from '../assets/Brazilian-Santos-Bag.png';
import imgCostaRicaTarrazu from '../assets/Costa-Rica-Tarrazu-Bag.png';
import imgGuatemalaAntigua from '../assets/Guatemala-Antigua-Bag.png';
import imgKenyaAA from '../assets/Kenya-AA-Bag.png';
import imgSumatraMandheling from '../assets/Sumatra-Mandheling-Bag.png';
import imgKona from '../assets/Kona-Bag.png';
import imgJamaicanBlueMountain from '../assets/Jamaican-Blue-Mountain-Bag.png';
import imgColombianSupermo from '../assets/Colombian-Supremo-Bag.png';
import imgEthiopianHarrar from '../assets/Ethiopian-Harrar-Bag.png';
import imgArabianMoch from '../assets/Arabian-Mocha-Bag.png';

const row1 = [
    imgJamaicanBlueMountain,
    imgEthiopianHarrar,
    imgGuatemalaAntigua,
    imgTanzaniaPeaberry,
    imgColombianSupermo,
    imgVietnameserobusta,
    imgKona,
    imgArabianMoch,
    imgKenyaAA,
    imgUrigacheffe,
    imgSumatraMandheling,
    imgPanamaGeisha,
    imgRedSulawesi,
    imgCostaRicaTarrazu,
    imgBrazilianSantos
];

const row2 = [
    imgKenyaAA,
    imgSumatraMandheling,
    imgVietnameserobusta,
    imgArabianMoch,
    imgPanamaGeisha,
    imgGuatemalaAntigua,
    imgJamaicanBlueMountain,
    imgColombianSupermo,
    imgUrigacheffe,
    imgEthiopianHarrar,
    imgTanzaniaPeaberry,
    imgKona,
    imgRedSulawesi,
    imgCostaRicaTarrazu,
    imgBrazilianSantos
];

const row3 = [
    imgGuatemalaAntigua,
    imgJamaicanBlueMountain,
    imgEthiopianHarrar,
    imgKona,
    imgUrigacheffe,
    imgTanzaniaPeaberry,
    imgKenyaAA,
    imgColombianSupremo,
    imgVietnameserobusta,
    imgSumatraMandheling,
    imgPanamaGeisha,
    imgArabianMocha,
    imgRedSulawesi,
    imgCostaricaTarrazu,
    imgBrazilianSantos
];

function ImageRow({iamges, speed = -0.25, offset = 0}) {
    //Double the images so the row is wide enough to never show gaps
    const double = [... images, ...images];

    return (
        <div className="carousel-row" style={{ transform: `translateX(${offset}px, 0, 0)` }}>
            {doubled.map((src, index) => (
                <div className="carousel-card" key={`${index}`}>
                    <img 
                     src={src}
                     alt={`Coffee bag ${(index % images.length) + 1}`}
                     className="carousel-image"
                     loading="lazy"
                    />
                </div>
            ))}
        </div>
    );
}

export default function FeaturesSection() {
    const sectionRef = useRef(null);
    const [offset,setOffset] = useState([0, 0, 0]);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const viewH = window.innerHeight;
            // progress: 0 when section enter bottom, 1 when is leaves top
            const progress = 1 - rect.bottom / (viewH + rect.height);
            const p = Math.max(0, Math.min(1, progress));

            //each row moves at diffent speeds/direction based on scroll progress
            // use total row width estimate to kepp things moving
            const range = 600;
            setOffsets({
                -p * range,
                p * range - range,
                -p * range * 0.7
            });
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="carousel-gallery-section" ref={sectionRef}>
            <div className="carousel-gallery-container">
                <ImageRow images={row1} offset={offset[0]} />
                <ImageRow images={row2} offset={offset[1]} />
                <ImageRow images={row3} offset={offset[2]} />
            </div>
        </section>
    );
}
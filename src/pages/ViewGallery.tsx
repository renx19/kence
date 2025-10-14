import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { GalleryItems } from "../data/gallery";
import "../styles/gallery.css";
import Loading from "../components/loading";


export default function ViewGallery() {
    const breakpointColumnsObj = {
        default: 3,
        900: 2,
        600: 1,
    };

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Increase delay for smoother loading effect
        const timer = setTimeout(() => setLoading(false), 1000); // 1 second
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Loading />;

    return (
        <section className="masonry-section" aria-label="Photo gallery">
            <h2 className="masonry-title">Memories</h2>

            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="masonry-grid"
                columnClassName="masonry-grid_column"
            >
                {GalleryItems.map((item, i) => (
                    <figure key={item.src + i} className="masonry-item">
                        <img
                            src={item.src}
                            loading="lazy"
                            decoding="async"
                            alt=""
                            style={{ width: "100%", display: "block" }}
                        />
                    </figure>
                ))}
            </Masonry>
        </section>
    );
}
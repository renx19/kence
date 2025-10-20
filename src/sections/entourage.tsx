import "../styles/entourage.css";
import { entourage } from "../data/gallery";

export default function EntourageSection() {
  return (
    <section id="entourage" className="entourage-container">
      <div className="entourage-wrapper">
        <h2 className="section-title">CANDARI - PANGANIBAN NUPTIALS</h2>

        <div className="entourage-section parents-section">
          <h2 className="section-title">Parents of the Groom</h2>
          <div className="parents-grid">
            <div className="parent-card">
              <img src="https://picsum.photos/200?random=1" alt="Groom's Father" />
              <p className="parent-name">MR. NICANOR CANDARI JR.</p>
              <p className="parent-role">Father of the Groom</p>
            </div>
            <div className="parent-card">
              <img src="https://picsum.photos/200?random=2" alt="Groom's Mother" />
              <p className="parent-name">MRS. JOSEPHINE CANDARI</p>
              <p className="parent-role">Mother of the Groom</p>
            </div>
          </div>
        </div>

        {/* Guardian of the Bride */}
        <div className="entourage-section guardian-section">
          <h2 className="section-title">Guardian of the Bride</h2>
          <div className="guardian-grid">
            <div className="guardian-card">
              <img src="https://picsum.photos/200?random=3" alt="Guardian Male" />
              <p className="guardian-name">MR. GABRIEL B. PANGANIBAN</p>
              <p className="guardian-role">Guardian of the Bride</p>
            </div>
            <div className="guardian-card">
              <img src="https://picsum.photos/200?random=4" alt="Guardian Female" />
              <p className="guardian-name">MRS. MARUJA P. DELA CRUZ</p>
              <p className="guardian-role">Guardian of the Bride</p>
            </div>
          </div>
        </div>

        <div className="entourage-section principal-sponsors-section">
          <h2 className="section-title">Principal Sponsors</h2>

          {/* Groom's Side */}
          <div className="sponsor-group groom-side">
            <h3 className="group-title">Groom's Side</h3>
            <div className="sponsor-grid">
              <div className="sponsor-card">
                <img src="https://picsum.photos/200?random=1" alt="PS. JOEL HERNANDEZ" />
                <p className="sponsor-name">PS. JOEL HERNANDEZ</p>
                <p className="sponsor-role">Groom's Side</p>
              </div>
              <div className="sponsor-card">
                <img src="https://picsum.photos/200?random=3" alt="MR. EDGARD GARCIA" />
                <p className="sponsor-name">MR. EDGARD GARCIA</p>
                <p className="sponsor-role">Groom's Side</p>
              </div>
              <div className="sponsor-card">
                <img src="https://picsum.photos/200?random=5" alt="MR. IRINEO GARCIA JR." />
                <p className="sponsor-name">MR. IRINEO GARCIA JR.</p>
                <p className="sponsor-role">Groom's Side</p>
              </div>
              <div className="sponsor-card">
                <img src="https://picsum.photos/200?random=7" alt="MR. STEVENSON DY" />
                <p className="sponsor-name">MR. STEVENSON DY</p>
                <p className="sponsor-role">Groom's Side</p>
              </div>
              <div className="sponsor-card">
                <img src="https://picsum.photos/200?random=9" alt="PS. ANGAELLO ARENAS" />
                <p className="sponsor-name">PS. ANGAELLO ARENAS</p>
                <p className="sponsor-role">Groom's Side</p>
              </div>
              <div className="sponsor-card">
                <img src="https://picsum.photos/200?random=11" alt="MR. ROGER BAY DO" />
                <p className="sponsor-name">MR. ROGER BAY DO</p>
                <p className="sponsor-role">Groom's Side</p>
              </div>
              <div className="sponsor-card">
                <img src="https://picsum.photos/200?random=13" alt="MR. ANTONIO ESPIRITU" />
                <p className="sponsor-name">MR. ANTONIO ESPIRITU</p>
                <p className="sponsor-role">Groom's Side</p>
              </div>
              <div className="sponsor-card">
                <img src="https://picsum.photos/200?random=15" alt="MR. WILFREDO BAJACAN" />
                <p className="sponsor-name">MR. WILFREDO BAJACAN</p>
                <p className="sponsor-role">Groom's Side</p>
              </div>
            </div>
          </div>

          {/* Bride's Side */}
          <div className="sponsor-group bride-side">
            <h3 className="group-title">Bride's Side</h3>
            <div className="sponsor-grid">
              <div className="sponsor-card">
                <img src="https://picsum.photos/200?random=2" alt="PS. AMELIA ABEL" />
                <p className="sponsor-name">PS. AMELIA ABEL</p>
                <p className="sponsor-role">Bride's Side</p>
              </div>
              <div className="sponsor-card">
                <img src="https://picsum.photos/200?random=4" alt="MRS. ESTELLITA GARCIA" />
                <p className="sponsor-name">MRS. ESTELLITA GARCIA</p>
                <p className="sponsor-role">Bride's Side</p>
              </div>
              <div className="sponsor-card">
                <img src="https://picsum.photos/200?random=6" alt="MRS. EMILIE GARCIA" />
                <p className="sponsor-name">MRS. EMILIE GARCIA</p>
                <p className="sponsor-role">Bride's Side</p>
              </div>
              <div className="sponsor-card">
                <img src="https://picsum.photos/200?random=8" alt="MRS. RASSEL BORDONES" />
                <p className="sponsor-name">MRS. RASSEL BORDONES</p>
                <p className="sponsor-role">Bride's Side</p>
              </div>
              <div className="sponsor-card">
                <img src="https://picsum.photos/200?random=10" alt="MRS. CHRISTINE ARENAS" />
                <p className="sponsor-name">MRS. CHRISTINE ARENAS</p>
                <p className="sponsor-role">Bride's Side</p>
              </div>
              <div className="sponsor-card">
                <img src="https://picsum.photos/200?random=12" alt="MRS. DIVINA DOLOR" />
                <p className="sponsor-name">MRS. DIVINA DOLOR</p>
                <p className="sponsor-role">Bride's Side</p>
              </div>
              <div className="sponsor-card">
                <img src="https://picsum.photos/200?random=14" alt="MRS. MARIA CORAZON ESPIRITU" />
                <p className="sponsor-name">MRS. MARIA CORAZON ESPIRITU</p>
                <p className="sponsor-role">Bride's Side</p>
              </div>
              <div className="sponsor-card">
                <img src="https://picsum.photos/200?random=16" alt="MRS. VILMA BAJACAN" />
                <p className="sponsor-name">MRS. VILMA BAJACAN</p>
                <p className="sponsor-role">Bride's Side</p>
              </div>
            </div>
          </div>
        </div>



        <div className="entourage-section principal-entourage-section">
          <h2 className="section-title">Best Man & Maid of Honor</h2>
          <div className="parents-grid">
            {/* Best Man */}
            <div className="parent-card">
              <img src="https://picsum.photos/200?random=11" alt="Best Man" />
              <p className="parent-name">JAMES DEAN VILLALOBOS</p>
              <p className="parent-role">Best Man</p>
            </div>

            {/* Maid of Honor */}
            <div className="parent-card">
              <img src="https://picsum.photos/200?random=12" alt="Maid of Honor" />
              <p className="parent-name">NOEMI PANGANIBAN</p>
              <p className="parent-role">Maid of Honor</p>
            </div>
          </div>
        </div>



        <div className="person-group-wrapper">
          {/* Groomsmen */}
          <div className="person-group groomsmen-side">
            <h3 className="group-title">Groomsmen</h3>
            <div className="person-grid">
              <div className="person-card">
                <div className="person-inner">
                  <img src="https://picsum.photos/100?random=31" alt="MARK AMOS DELA CRUZ" />
                  <p className="person-name">MARK AMOS DELA CRUZ</p>
                  <p className="person-role">Groomsman</p>
                </div>
              </div>
              <div className="person-card">
                <div className="person-inner">
                  <img src="https://picsum.photos/100?random=32" alt="ALDRIN MARTINEZ" />
                  <p className="person-name">ALDRIN MARTINEZ</p>
                  <p className="person-role">Groomsman</p>
                </div>
              </div>
              <div className="person-card">
                <div className="person-inner">
                  <img src="https://picsum.photos/100?random=33" alt="JIREH JAMES ABEL" />
                  <p className="person-name">JIREH JAMES ABEL</p>
                  <p className="person-role">Groomsman</p>
                </div>
              </div>
              <div className="person-card">
                <div className="person-inner">
                  <img src="https://picsum.photos/100?random=34" alt="JOHN RUZZEL PANGANIBAN" />
                  <p className="person-name">JOHN RUZZEL PANGANIBAN</p>
                  <p className="person-role">Groomsman</p>
                </div>
              </div>
              <div className="person-card">
                <div className="person-inner">
                  <img src="https://picsum.photos/100?random=35" alt="JOHN CEDRICK PANGANIBAN" />
                  <p className="person-name">JOHN CEDRICK PANGANIBAN</p>
                  <p className="person-role">Groomsman</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bridesmaids */}
          <div className="person-group bridesmaids-side">
            <h3 className="group-title">Bridesmaids</h3>
            <div className="person-grid">
              <div className="person-card">
                <div className="person-inner">
                  <img src="https://picsum.photos/100?random=36" alt="CHRISTANNE JOY NARAZO" />
                  <p className="person-name">CHRISTANNE JOY NARAZO</p>
                  <p className="person-role">Bridesmaid</p>
                </div>
              </div>
              <div className="person-card">
                <div className="person-inner">
                  <img src="https://picsum.photos/100?random=37" alt="MIKEE CANDARI" />
                  <p className="person-name">MIKEE CANDARI</p>
                  <p className="person-role">Bridesmaid</p>
                </div>
              </div>
              <div className="person-card">
                <div className="person-inner">
                  <img src="https://picsum.photos/100?random=38" alt="MONICA ALARCON" />
                  <p className="person-name">MONICA ALARCON</p>
                  <p className="person-role">Bridesmaid</p>
                </div>
              </div>
              <div className="person-card">
                <div className="person-inner">
                  <img src="https://picsum.photos/100?random=39" alt="JANILYN FERIEMAYE PAVILAR" />
                  <p className="person-name">JANILYN FERIEMAYE FAVILAR</p>
                  <p className="person-role">Bridesmaid</p>
                </div>
              </div>
              <div className="person-card">
                <div className="person-inner">
                  <img src="https://picsum.photos/100?random=40" alt="MARIANNE EMMANUELLE DELA CRUZ" />
                  <p className="person-name">MARIANNE EMMANUELLE DELA CRUZ</p>
                  <p className="person-role">Bridesmaid</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="secondary-sponsors-section">
          <h2 className="section-title">Secondary Sponsors</h2>

          {/* Veil, Cord, Candle */}
          <div className="secondary-sponsors-grid">
            <div className="secondary-sponsor-card">
              <img src="https://picsum.photos/200?random=21" alt="Veil" />
              <p className="secondary-sponsor-name">CARLO JAMES ABEL</p>
              <p className="secondary-sponsor-role">Veil</p>
            </div>
            <div className="secondary-sponsor-card">
              <img src="https://picsum.photos/200?random=22" alt="Cord" />
              <p className="secondary-sponsor-name">JEVON BENINO</p>
              <p className="secondary-sponsor-role">Cord</p>
            </div>
            <div className="secondary-sponsor-card">
              <img src="https://picsum.photos/200?random=23" alt="Candle" />
              <p className="secondary-sponsor-name">JERWIN VILLALOBOS</p>
              <p className="secondary-sponsor-role">Candle</p>
            </div>
            <div className="secondary-sponsor-card">
              <img src="https://picsum.photos/200?random=24" alt="Veil" />
              <p className="secondary-sponsor-name">KATRINA ANNE CORDERO</p>
              <p className="secondary-sponsor-role">Veil</p>
            </div>
            <div className="secondary-sponsor-card">
              <img src="https://picsum.photos/200?random=25" alt="Cord" />
              <p className="secondary-sponsor-name">REGINE SORIANO</p>
              <p className="secondary-sponsor-role">Cord</p>
            </div>
            <div className="secondary-sponsor-card">
              <img src="https://picsum.photos/200?random=26" alt="Candle" />
              <p className="secondary-sponsor-name">ANN SHERLY AVELLANOZA</p>
              <p className="secondary-sponsor-role">Candle</p>
            </div>
          </div>

          {/* Spacer */}
          <div className="secondary-sponsors-divider"></div>
          <h2 className="section-title">Bearers</h2>
          {/* Ring / Coin / Bible Bearers */}
          <div className="secondary-sponsors-grid">
            <div className="secondary-sponsor-card">
              <img src="https://picsum.photos/200?random=27" alt="Ring Bearer" />
              <p className="secondary-sponsor-name">DYLAN JERICK MAESTRO</p>
              <p className="secondary-sponsor-role">Ring Bearer</p>
            </div>
            <div className="secondary-sponsor-card">
              <img src="https://picsum.photos/200?random=28" alt="Coin Bearer" />
              <p className="secondary-sponsor-name">KRIS NATHANIEL PANGANIBAN</p>
              <p className="secondary-sponsor-role">Coin Bearer</p>
            </div>
            <div className="secondary-sponsor-card">
              <img src="https://picsum.photos/200?random=29" alt="Bible Bearer" />
              <p className="secondary-sponsor-name">JEFF DANIEL TURLA</p>
              <p className="secondary-sponsor-role">Bible Bearer</p>
            </div>
          </div>
        </div>


        <div className="flowergirls-section">
          <h3 className="section-title">Flower Girls</h3>
          <div className="flowergirls-grid">
            <div className="flowergirl-card">
              <img src="https://picsum.photos/100?random=41" alt="MIYUKI GYLZEL PANGANIBAN" />
              <p className="flowergirl-name">MIYUKI GYLZEL PANGANIBAN</p>
              <p className="flowergirl-role">Flower Girl</p>
            </div>
            <div className="flowergirl-card">
              <img src="https://picsum.photos/100?random=42" alt="AICEE CHARIELLENE BRADECINA" />
              <p className="flowergirl-name">AICEE CHARIELLENE BRADECINA</p>
              <p className="flowergirl-role">Flower Girl</p>
            </div>
            <div className="flowergirl-card">
              <img src="https://picsum.photos/100?random=43" alt="ANICKA PAULINE ROBERTO" />
              <p className="flowergirl-name">ANICKA PAULINE ROBERTO</p>
              <p className="flowergirl-role">Flower Girl</p>
            </div>
            <div className="flowergirl-card">
              <img src="https://picsum.photos/100?random=44" alt="JOYCE MAXINE PANGANIBAN" />
              <p className="flowergirl-name">JOYCE MAXINE PANGANIBAN</p>
              <p className="flowergirl-role">Flower Girl</p>
            </div>
            <div className="flowergirl-card">
              <img src="https://picsum.photos/100?random=45" alt="COLENE DOMA" />
              <p className="flowergirl-name">COLENE DOMA</p>
              <p className="flowergirl-role">Flower Girl</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-entourage-wrapper">
        <h2>
          CANDARI <br /> - <br /> PANGANIBAN <br /> NUPTIALS
        </h2>

        {entourage.map((group, index) => (
          <div key={index} className="mobile-entourage-group">
            <h3>
              {group.mainTitle}
              {group.subtitle && (
                <span className="subtitle"> — {group.subtitle}</span>
              )}
            </h3>
            <ul>
              {group.names.map((name, i) => (
                <li key={i}>{name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>


    </section>
  );
}

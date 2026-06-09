import LegalShell from '@/components/stealth/LegalShell';

const TermsOfService = () => (
  <LegalShell title="Terms of Use" updated="2026-06-09">
    <section>
      <h2>What this site is</h2>
      <p>
        This website is an informational presence for Shaithilyog Labs, a
        healthcare AI research venture based in New York. It describes intent,
        not products. Nothing on this site is medical advice, a diagnosis, a
        treatment recommendation, or a substitute for a licensed clinician.
      </p>
    </section>

    <section>
      <h2>Products</h2>
      <p>
        Products built by Shaithilyog Labs are offered under their own terms,
        published with each product. Using this website does not create any
        relationship — clinical, contractual, or otherwise — between you and
        Shaithilyog Labs.
      </p>
    </section>

    <section>
      <h2>No warranty</h2>
      <p>
        This site is provided "as is", without warranty of any kind, express
        or implied. We may change or remove any part of it at any time.
      </p>
    </section>

    <section>
      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, Shaithilyog Labs and its
        operator shall not be liable for any damages arising from your use of
        this website. Total cumulative liability shall not exceed USD $50.
      </p>
    </section>

    <section>
      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the State of New York. Any
        dispute shall be resolved by binding arbitration in New York County,
        New York, on an individual basis.
      </p>
    </section>

    <section>
      <h2>Contact</h2>
      <p>
        <a href="mailto:hello@shaithilyog.tech">hello@shaithilyog.tech</a>
      </p>
    </section>
  </LegalShell>
);

export default TermsOfService;

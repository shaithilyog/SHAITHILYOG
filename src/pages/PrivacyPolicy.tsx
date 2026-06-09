import LegalShell from '@/components/stealth/LegalShell';

const PrivacyPolicy = () => (
  <LegalShell title="Privacy" updated="2026-06-09">
    <p>
      This site is deliberately quiet, and so is its data collection. Here is
      the complete list of what we collect — it is short because the truth is
      short.
    </p>

    <section>
      <h2>What we collect</h2>
      <p>
        If you submit your email through "Request access", we store that email
        address, the time you submitted it, and the fact that it came from this
        site. Nothing else. No analytics profiles, no advertising trackers, no
        cookies beyond what our hosting requires to serve the page.
      </p>
      <p>
        Our hosting providers (GitHub Pages, Cloudflare) may log routine
        request metadata — IP address, user agent, timestamps — for security
        and uptime, retained per their own policies.
      </p>
    </section>

    <section>
      <h2>How we use it</h2>
      <p>
        Your email is used for exactly one thing: to contact you about
        Shaithilyog Labs when there is something worth saying. We do not sell
        it, share it, or enrich it. You can ask us to delete it at any time by
        writing to{' '}
        <a href="mailto:hello@shaithilyog.tech">hello@shaithilyog.tech</a>.
      </p>
    </section>

    <section>
      <h2>Our products</h2>
      <p>
        Products built by Shaithilyog Labs carry their own privacy policies,
        published with each product. This policy covers only this website.
      </p>
    </section>

    <section>
      <h2>Your rights</h2>
      <p>
        If you are in the EU, UK, California, or a similar jurisdiction, you
        have rights of access, correction, and deletion. Because we hold at
        most one email address about you, exercising them is one message:{' '}
        <a href="mailto:hello@shaithilyog.tech">hello@shaithilyog.tech</a>.
      </p>
    </section>

    <section>
      <h2>Changes</h2>
      <p>
        If this policy changes meaningfully, the date above changes with it.
      </p>
    </section>
  </LegalShell>
);

export default PrivacyPolicy;

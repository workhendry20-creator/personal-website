import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-secondary">
      <p>Developed by <strong className="font-semibold text-text-primary">Hendry Bambang</strong></p>
      <SocialLinks />
    </footer>
  );
}

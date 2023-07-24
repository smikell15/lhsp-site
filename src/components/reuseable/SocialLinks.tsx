import { FC } from 'react';

// ========================================================
type SocialLinksProps = { className?: string };
// ========================================================

const links = [
  { id: 1, icon: 'uil uil-twitter', url: 'https://twitter.com/LindyHop_StPete/' },
  { id: 2, icon: 'uil uil-facebook-f', url: 'https://www.facebook.com/LindyHop.SaintPete/' },
  { id: 3, icon: 'uil uil-video', url: 'https://www.tiktok.com/@lindyhopsaintpete' },
  { id: 4, icon: 'uil uil-instagram', url: 'https://www.instagram.com/lindy_hop_saint_pete/' },
  { id: 5, icon: 'uil uil-youtube', url: 'https://www.youtube.com/@lindyhopsaintpete421/' }
];

const SocialLinks: FC<SocialLinksProps> = ({ className = 'nav social social-white mt-4' }) => {
  return (
    <nav className={className}>
      {links.map(({ id, icon, url }) => (
        <a href={url} key={id} target="_blank" rel="noreferrer">
          <i className={icon} />
        </a>
      ))}
    </nav>
  );
};

export default SocialLinks;

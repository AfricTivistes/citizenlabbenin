import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'CitizenLab',
      links: [
        {
          text: 'A Propos',
          href: getPermalink('/a-propos'),
        },
        {
          text: 'Equipe',
          href: getPermalink('/equipe'),
        },
      ],
    },
    {
      text: 'Actualités',
      href: getBlogPermalink(),
      links: [

        {
          text: 'Campagnes',
          href: getPermalink('campagnes', 'category'),
        },
        {
          text: 'Podcasts',
          href: getPermalink('podcast', 'category'),
        },
        {
          text: 'Vidéos',
          href: getPermalink('videos', 'category'),
        },

      ],
    },
    {
      text: 'Blog',
      href: getPermalink('blog', 'category')
    },
    {
      text: 'Formations',
      href: getPermalink('formations', 'category')
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
    
  ],
};

export const footerData = {
  links: [
    {
      title: 'CitizenLab',
      links: [
        {
          text: 'A Propos', href: getPermalink('/a-propos') },
        { text: 'Equipe', href: getPermalink('/equipe') },
      ],
    },
    {
      title: 'Actualités',
      links: [
        { text: "Actualités", href: getBlogPermalink() },
        { text: "Blog", href: getPermalink('blog', 'category') },
        { text: 'Campagnes', href:'#' },
        { text: 'Podcasts', href: getPermalink('podcast', 'category') },
        { text: 'Vidéos', href: getPermalink('videos', 'category') },
        { text: 'Formations', href: getPermalink('formations', 'category') },
      ],
    },

    {
      title: "Nous Contacter",
      links:[
        { text: "citizenlabbenin@africtivistes.org", href:'mailto:citizenlabbenin@africtivistes.org ' },
        { text: "+229 97 39 99 95", href: 'tel:+22997399995'},
        {text: "Cotonou, Benin", href: '#'}
      ]
    }
  ],
  secondaryLinks: [
    { text: 'Termes et Conditions', href: getPermalink('/termes-et-conditions') },
    //{ text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { icon: 'tabler:brand-x', href: 'https://twitter.com/BeninCitizenlab' },
    { icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/citizenlabbenin/' },
    { icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/profile.php?id=61553614994311' },
    { icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/citizen-lab-benin/about/' },
    { icon: 'tabler:brand-github', href: 'https://github.com/AfricTivistes/citizenlabbenin' },
  ],
  footNote: `
  <a href="https://www.africtivistes.com" target= '_blank'>
  <img src="https://update.africtivistes.org/wp-content/uploads/2023/10/Logo-Africtivistes.png" alt="AfricTivistes" class="h-8" />
  </a>
    <a target= '_blank' class="text-green-600 hover:underline dark:text-gray-200" href="https://www.africtivistes.com"> AfricTivistes</a> · All rights reserved.
  `,
};

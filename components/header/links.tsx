import {
  instagramIcon,
  facebookIcon,
  youtubeIcon,
  vkIcon,
  telegramIcon,
} from '../icons'

export const Links = () => (
  <div className="fixed sm:left-10 sm:bottom-10 left-7 bottom-4 flex z-30">
    <a
      href="https://www.instagram.com/ngbelarus/"
      target="_blank"
      rel="noreferrer"
      className="mr-4 cursor-pointer"
    >
      {instagramIcon}
    </a>
    <a
      href="https://www.facebook.com/NGBelarus"
      target="_blank"
      rel="noreferrer"
      className="mr-4 cursor-pointer"
    >
      {facebookIcon}
    </a>
    <a
      href="https://www.youtube.com/user/NewGenerationBY"
      target="_blank"
      rel="noreferrer"
      className="mr-4 cursor-pointer"
    >
      {youtubeIcon}
    </a>
    <a
      href="https://vk.com/skinia2022"
      target="_blank"
      rel="noreferrer"
      className="mr-4 cursor-pointer"
    >
      {vkIcon}
    </a>
    <a
      href="https://t.me/skiniaby"
      target="_blank"
      rel="noreferrer"
      className="cursor-pointer"
    >
      {telegramIcon}
    </a>
  </div>
)

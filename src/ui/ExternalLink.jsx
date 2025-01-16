import { GoLinkExternal } from "react-icons/go";
import PropTypes from "prop-types";

function ExternalLink({ children, href }) {
  return (
    <a
      target="_blank"
      href={href}
      className="text-slate-50 transition-all duration-500 font-semibold ml-[20px] flex items-center gap-1 hover:text-[#5eead4]"
    >
      {children}
      <GoLinkExternal />
    </a>
  );
}

ExternalLink.propTypes = {
  children: PropTypes.string,
  href: PropTypes.any,
};

export default ExternalLink;

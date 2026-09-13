import { RxDividerVertical } from "react-icons/rx";
import { GiOlive } from "react-icons/gi";

const AnnouncementBar = () => {
  return (
    <div>
      <section className="announcement-bar">
        <div className="flex min-h-10 items-center justify-center gap-4 bg-navy px-4 text-white">
          <GiOlive className="text-cream-dark text-base mr-10" />
          <p className="text-xs text-cream-dark">Custom orders open</p>
          <RxDividerVertical className="text-sm text-cream-dark" />
          <p className="text-xs text-cream-dark">Local pickup available</p>
          <RxDividerVertical className="text-sm text-cream-dark" />
          <p className="text-xs text-cream-dark">
            A taste of Greece in every bite
          </p>
          <GiOlive className="text-cream-dark text-base ml-10" />
        </div>
      </section>
    </div>
  );
};

export default AnnouncementBar;

import React, { useEffect, useRef, useCallback } from "react";

interface Tech {
  name: string;
  icon: string;
  description: string;
}

interface TechStackMobileProps {}

const TechStackMobile: React.FC<TechStackMobileProps> = ({}) => {
  // Refs for Intersection Observer
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // A helper to store references for each item
  const setItemRef = useCallback((el: HTMLDivElement | null, index: number) => {
    itemRefs.current[index] = el;
  }, []);

  // Intersection Observer: auto-select the item that's 50% in view
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = Number(entry.target.getAttribute("data-index"));
          setSelectedIndex(idx);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [setSelectedIndex]);

  return (
    <div
      className="
        grid
        grid-cols-[120px_1fr]
        w-full
        h-auto
      "
    >
      {/* Left side: Single-column list of tech items */}
      <div className="bg-gray-50 border-r border-gray-200 h-full overflow-auto">
        {techList.map((tech, i) => (
          <div
            key={tech.name}
            data-index={i}
            ref={(el) => setItemRef(el, i)}
            className={`
              flex items-center gap-2 p-4 cursor-pointer
              border-b border-gray-200
              ${i === activeIndex ? "bg-blue-100" : "bg-white"}
            `}
          >
            <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
            <span className="font-medium">{tech.name}</span>
          </div>
        ))}
      </div>

      {/* Right side: Description panel */}
      <div className="p-4 bg-white">
        <h2 className="text-xl font-bold mb-2">
          {techList[activeIndex]?.name}
        </h2>
        <p className="text-gray-700">{techList[activeIndex]?.description}</p>
      </div>
    </div>
  );
};

export default TechStackMobile;

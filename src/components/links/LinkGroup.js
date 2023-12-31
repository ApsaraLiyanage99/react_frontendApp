import { NavLink } from "react-router-dom";

// modularize components
const SublinkWrapper = ({ children, title }) => {
  return (
    <div>
      <div className="font-bold text-xs pb-3 text-gray-700">{title}</div>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
};

const Sublink = ({ path, name }) => {
  return (
    <NavLink to={path}>
      <div className="text-xs hover:underline">{name}</div>
    </NavLink>
  );
};

function LinkGroup() {
  return (
    <div className="grid grid-cols-5 border-t border-t-gray-400 py-5">
      <SublinkWrapper title="Shop and Learn">
        <Sublink to="/" name="Store" />
        <Sublink to="/" name="Mac" />
        <Sublink to="/" name="iPad" />
        <Sublink to="/" name="iPhone" />
        <Sublink to="/" name="iWatch" />
        <Sublink to="/" name="AirPods" />
      </SublinkWrapper>

      <SublinkWrapper title="Services">
        <Sublink to="/" name="Apple Music" />
        <Sublink to="/" name="Apple TV+" />
        <Sublink to="/" name="iPad" />
      </SublinkWrapper>

      <SublinkWrapper title="Features">
        <Sublink to="/" name="Store" />
        <Sublink to="/" name="Mac" />
        <Sublink to="/" name="iPad" />
        <Sublink to="/" name="iPhone" />
      </SublinkWrapper>

      <SublinkWrapper title="Upgrades">
        <Sublink to="/" name="Store" />
        <Sublink to="/" name="Mac" />
        <Sublink to="/" name="iPad" />
        <Sublink to="/" name="iPhone" />
        <Sublink to="/" name="iWatch" />
      </SublinkWrapper>

      <SublinkWrapper title="Future for you">
        <Sublink to="/" name="Store" />
        <Sublink to="/" name="Mac" />
        <Sublink to="/" name="iPad" />
      </SublinkWrapper>

    </div>
  );
}

export default LinkGroup;

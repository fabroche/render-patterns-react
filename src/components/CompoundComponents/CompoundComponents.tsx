import {Tab} from "./Tab.tsx";
import {Tabs} from "./Tabs.tsx";

export const CompoundComponents = () => {
  return (
    <Tabs>
      <Tab label="Leon">
        🦁
      </Tab>
      <Tab label="delfin">
        🐬
      </Tab>
      <Tab label="Lagarto">
        🦎
      </Tab>
    </Tabs>
  );
};

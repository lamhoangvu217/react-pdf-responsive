import { Tabs } from "antd";
import PdfViewerComponent from "./PdfViewerComponent";

function Wrapper() {
  const document = "document.pdf";
  const items = [
    {
      key: "1",
      label: "Tab 1",
      children: <PdfViewerComponent document={document} />,
    },
    {
      key: "2",
      label: "Tab 2",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Tab 3",
      children: "Content of Tab Pane 3",
    },
  ];
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
}

export default Wrapper;

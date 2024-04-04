import { useState, useCallback, createContext } from "react";

import Form from "./FileForm";
import FileDetails from "./FileDetails";

export const FileContext = createContext<
  [File | undefined, (file: File | undefined) => void]
>([undefined, () => {}]);

export default function App() {
  const [file, setFile] = useState<File>();
  return (
    <FileContext.Provider value={[file, setFile]}>
      {file ? <FileDetails file={file} /> : null}
      <Form />
    </FileContext.Provider>
  );
}

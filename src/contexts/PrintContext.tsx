import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { flushSync } from "react-dom";

const PrintContext = createContext(false);
const TriggerPrintContext = createContext<() => void>(() => window.print());

export function PrintProvider({ children }: { children: ReactNode }) {
  const [isPrinting, setIsPrinting] = useState(false);

  useEffect(() => {
    // Handle native Ctrl+P — flushSync forces React to update DOM before browser captures layout
    const handleBeforePrint = () => flushSync(() => setIsPrinting(true));
    const handleAfterPrint = () => setIsPrinting(false);
    window.addEventListener("beforeprint", handleBeforePrint);
    window.addEventListener("afterprint", handleAfterPrint);
    return () => {
      window.removeEventListener("beforeprint", handleBeforePrint);
      window.removeEventListener("afterprint", handleAfterPrint);
    };
  }, []);

  // Called by the PDF button — flushSync ensures all animated components
  // switch to their static version before window.print() captures layout
  const triggerPrint = () => {
    flushSync(() => setIsPrinting(true));
    window.print();
  };

  return (
    <PrintContext.Provider value={isPrinting}>
      <TriggerPrintContext.Provider value={triggerPrint}>
        {children}
      </TriggerPrintContext.Provider>
    </PrintContext.Provider>
  );
}

export const usePrintMode = () => useContext(PrintContext);
export const useTriggerPrint = () => useContext(TriggerPrintContext);

const TInput = {
  baseClass: "border block rounded",
  defaultStatusClass: "bg-white",
  warningStatusClass: "border-yellow-400 bg-yellow-100",
  errorStatusClass: "border-red-300 bg-red-100",
  successStatusClass: "border-green-300 bg-green-100",
  disabledClass: "bg-gray-100 cursor-not-allowed opacity-75",
  defaultSizeClass: "p-3",
  largeSizeClass: "p-4 text-lg",
  smallSizeClass: "p-2 text-sm"
};

const TTextarea = {
  baseClass: "border block rounded",
  defaultStatusClass: "bg-white",
  errorStatusClass: "border-red-300 bg-red-100",
  warningStatusClass: "border-yellow-400 bg-yellow-100",
  successStatusClass: "border-green-300 bg-green-100",
  disabledClass: "bg-gray-100 cursor-not-allowed opacity-75",
  defaultSizeClass: "p-3",
  largeSizeClass: "p-4 text-lg",
  smallSizeClass: "p-2 text-sm"
};

const TSelect = {
  baseClass: "block appearance-none w-full border pr-8 rounded leading-tight",
  baseClassMultiple:
    "block appearance-none w-full border rounded leading-tight",
  defaultStatusClass: "bg-white",
  errorStatusClass: "border-red-300 bg-red-100",
  successStatusClass: "border-green-300 bg-green-100",
  warningStatusClass: "border-yellow-400 bg-yellow-100",
  disabledClass: "bg-gray-100 cursor-not-allowed opacity-75",
  defaultSizeClass: "p-3",
  largeSizeClass: "p-4 text-lg",
  smallSizeClass: "p-2 text-sm",
  wrapperClass: "relative",
  arrowWrapperClass:
    "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700",
  arrowClass: "fill-current h-4 w-4"
};

const TButton = {
  baseClass: "border block rounded inline-flex items-center justify-center",
  defaultClass:
    "bg-white border-gray-400 hover:bg-gray-100 hover:border-gray-500",
  primaryClass:
    "text-white bg-blue-500 border-blue-500 hover:bg-blue-600 hover:border-blue-600",
  secondaryClass:
    "border-blue-500 text-blue-500 bg-white hover:border-blue-600 hover:text-blue-600 hover:bg-white",
  tertiaryClass:
    "border block underline text-blue-500 border-transparent bg-transparent hover:text-blue-600",
  successClass:
    "text-white bg-green-500 border-green-500 hover:bg-green-600 hover:border-green-600",
  dangerClass:
    "text-white bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600",
  warningClass:
    "text-yellow-900 bg-yellow-500 border-yellow-500 hover:bg-yellow-600 hover:border-yellow-600",
  disabledClass: "cursor-not-allowed opacity-75",
  // defaultSizeClass: "px-6 py-3",
  defaultSizeClass: "px-4 py-2 text-sm",
  // largeSizeClass: "px-8 py-4 text-lg",
  largeSizeClass: "px-6 py-3 text-md",
  // smallSizeClass: "px-4 py-2 text-sm"
  smallSizeClass: "px-2 py-1 text-xs"
};

const TAlert = {
  baseClass: "border-l-4 p-4 relative flex",
  defaultClass: "bg-gray-100 border-gray-500 text-gray-800",
  infoClass: "bg-blue-100 border-blue-500 text-blue-800",
  successClass: "bg-green-100 border-green-500 text-green-800",
  dangerClass: "bg-red-100 border-red-500 text-red-800",
  warningClass: "bg-yellow-100 border-yellow-500 text-yellow-800",
  closeButtonClass: "absolute top-0 bottom-0 right-0 px-4 py-3",
  closeIconClass: "fill-current h-6 w-6"
};

const TTable = {
  tableClass: "w-full bg-white rounded border table",
  theadClass: {
    thead: "",
    tr: "border",
    th: "uppercase text-xs font-bold p-3 text-gray-700"
  },
  tbodyClass: {
    tbody: "",
    tr: "border-t",
    td: "p-3"
  },
  tfootClass: {
    tfoot: "",
    tr: "border-t",
    td: "p-3"
  }
};

const TModal = {
  baseClass:
    "z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed",
  overlayClass:
    "z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-black opacity-75",
  containerClass: "z-50 relative p-3 mx-auto my-0 max-w-full",
  closeIconClass: "fill-current h-6 w-6 absolute right-0 top-0 m-6",
  wrapperClass:
    "bg-white rounded shadow-lg border flex flex-col overflow-hidden",
  headerClass: "px-6 py-3 text-xl border-b",
  bodyClass: "p-6 flex-grow",
  footerClass: "px-6 py-3 border-t"
};

const TPagination = {
  wrapperClass: "table border-collapse",
  itemClass: "table-cell ",
  pageClass: "border border-gray-300 w-12 h-12",
  controlClass: "border border-gray-300 w-12 h-12",
  disabledControlClass: "border border-gray-300 w-12 h-12",
  ellipsisClass: "border border-gray-300 w-12 h-12 hidden md:table-cell",
  buttonClass:
    "flex w-full h-full items-center justify-center font-bold bg-white",
  controlButtonClass: "text-blue-500 hover:text-blue-700 hover:bg-gray-200",
  ellipsisButtonClass: "text-gray-600",
  activeButtonClass: "bg-blue-500 text-white",
  inactiveButtonClass: "text-blue-500 hover:text-blue-700 hover:bg-gray-200",
  disabledButtonClass: "text-gray-400 cursor-not-allowed",
  disabledControlButtonClass: "text-gray-400 cursor-not-allowed"
};

const TCard = {
  baseClass: "bg-white rounded border",
  headerClass: "px-6 py-3 text-xl border-b",
  bodyClass: "p-6",
  footerClass: "px-6 py-3 border-t"
};

const TDropdown = {
  baseClass: "",
  dropdownClass: "w-64 bg-white rounded border shadow-md py-2 z-10",
  disabledClass: ""
};

const TInputGroup = {
  baseClass: "mb-3",
  labelClass: "block uppercase tracking-wide text-xs font-bold mb-1",
  bodyClass: "",
  feedbackClass: "text-sm",
  descriptionClass: "text-sm",
  statusClass: {
    default: {
      label: "text-gray-700",
      body: "",
      feedback: "text-gray-700",
      description: "text-gray-700"
    },
    error: {
      label: "text-red-700",
      body: "",
      feedback: "text-red-700",
      description: "text-gray-700"
    },
    success: {
      label: "text-green-700",
      body: "",
      feedback: "text-green-700",
      description: "text-gray-700"
    },
    warning: {
      label: "text-yellow-700",
      body: "",
      feedback: "text-yellow-700",
      description: "text-gray-700"
    }
  }
};

const MyOwnTheme = {
  TInput,
  TTextarea,
  TSelect,
  TButton,
  TAlert,
  TTable,
  TModal,
  TPagination,
  TCard,
  TDropdown,
  TInputGroup
};

export default MyOwnTheme;

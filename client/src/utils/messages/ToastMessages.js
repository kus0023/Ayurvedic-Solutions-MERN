export const successMessage = (message, duration) => {
  window.M.toast({
    html: message,
    classes: "green white-text",
    displayLength: duration || 10000,
  });
};

export const errorMessage = (message, duration) => {
  window.M.toast({
    html: message,
    classes: "red white-text",
    displayLength: duration || 10000,
  });
};

export const simpleMessage = (message, duration) => {
  window.M.toast({
    html: message,
    classes: "",
    displayLength: duration,
  });
};

export const warnMessage = (message, duration) => {
  window.M.toast({
    html: message,
    classes: "yellow white-text",
    displayLength: duration || 6000,
  });
};

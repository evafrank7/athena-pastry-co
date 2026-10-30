export type FormSubmission = {
    formType: "customOrder" | "contact";
    website?: string;
    [key: string]: unknown;
  };
  
  type SubmissionResponse = {
    success: boolean;
    message: string;
  };
  
  export async function submitForm(
    data: FormSubmission,
  ): Promise<SubmissionResponse> {
    const endpoint = import.meta.env.VITE_APPS_SCRIPT_URL;
  
    if (!endpoint) {
      throw new Error(
        "The Google Apps Script submission URL has not been configured.",
      );
    }
  
    await fetch(endpoint, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(data),
    });

    // Apps Script processes the request, but its cross-origin redirect returns
    // an opaque response that browser JavaScript cannot safely inspect.
    return {
      success: true,
      message: "Submission sent.",
    };
  }

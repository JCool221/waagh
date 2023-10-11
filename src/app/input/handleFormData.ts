export const handleFormData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (e.target instanceof HTMLFormElement) {
      const form = new FormData(e.target);
      const formData = Object.fromEntries(form.entries());
      console.log(formData)
    } else {
      console.error('e is not a form element, why?')
    }
  };

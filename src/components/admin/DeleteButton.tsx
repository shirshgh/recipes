"use client";

interface Props {
  action: (formData: FormData) => Promise<void>;
  title: string;
}

export function DeleteButton({ action, title }: Props) {
  return (
    <form action={action}>
      <button
        type="submit"
        className="text-xs text-gray-300 hover:text-red-400 transition-colors px-2 py-1 rounded-lg hover:bg-red-50"
        onClick={(e) => {
          if (!confirm(`Delete "${title}"?`)) e.preventDefault();
        }}
      >
        Delete
      </button>
    </form>
  );
}

import React from "react";
import Language from "../Cards/Language";
import { getLanguages } from "@/app/actions";

const Languages = async () => {
  try {
    const { languages, message, success } = await getLanguages();


    if (success && Array.isArray(languages) && languages.length > 0) {
      return (
        <section className="grid grid-cols-4 gap-4 mt-10">
          {languages.map((language) => (
            <Language
              key={language._id}
              followers={language.followers}
              image={language.image}
              name={language.name}
              shortName={language.shortName}
            />
          ))}
        </section>
      );
    }

    // Fallback when no languages exist
    return (
      <p className="mt-10 text-center px-5 py-1.5 rounded-md select-none bg-red-600/10 max-w-screen-md mx-auto text-red-600 dark:bg-red-600 dark:text-white shadow-inner dark:shadow-red-500 shadow-red-500/10">
        هیچ زبانی برای نمایش وجود ندارد !
      </p>
    );
  } catch (error) {
    console.error("Error fetching languages:", error.message);
    return (
      <p className="mt-10 text-center text-red-500">
        An error occurred while fetching languages.
      </p>
    );
  }
};

export default Languages;

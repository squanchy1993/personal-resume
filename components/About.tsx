"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { useLocale, useTranslations } from "next-intl";

export default function About() {
  const { ref } = useSectionInView("About");
  const t = useTranslations("AboutSection");
  const sectionLan = useTranslations("SectionName");
  const activeLocale = useLocale();

  return (
    <motion.section
      ref={ref}
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{sectionLan("about")}</SectionHeading>
      <>
        <div>
          <p>
            {t("desc")}
          </p>
          <h4 className="font-bold">{t("fontEnd")}</h4>
          <p className="ml-6">
            {t("fontEndContent")}
          </p>
          <h4 className="font-bold">{t("AppDevelopment")}</h4>
          <p className="ml-6">
            {t("AppDevelopmentContent")}
          </p>
          <h4 className="font-bold">{t("backend")}</h4>
          <p className="ml-6">
            {t("backendContent")}
          </p>
          <p>
            {t("summary")}
          </p>
        </div>
      </>
    </motion.section>
  );
}

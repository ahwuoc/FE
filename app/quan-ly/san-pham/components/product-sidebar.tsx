"use client";

import {
  Package,
  Leaf,
  BookOpen,
  Award,
  CheckCircle2,
  Clock,
  AlertCircle,
} from "lucide-react";
import { useLanguage } from "@/context/language-context"; // Import language hook
import productSidebarTranslations from "./langauge-product-sidebar";

interface ProductSidebarProps {
  activeTypeTab: string;
  setActiveTypeTab: (type: string) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function ProductSidebar({
  activeTypeTab,
  setActiveTypeTab,
  activeTab,
  setActiveTab,
}: ProductSidebarProps) {
  const { language } = useLanguage(); // Get current language

  return (
    <div className="bg-white rounded-lg border p-4">
      <h3 className="font-medium text-lg mb-4">
        {productSidebarTranslations.productTypeTitle[language]}
      </h3>
      <div className="space-y-2">
        <button
          onClick={() => setActiveTypeTab("all")}
          className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
            activeTypeTab === "all"
              ? "bg-green-50 text-green-600"
              : "text-gray-700 hover:bg-gray-50"
          }`}
        >
          <Package className="w-5 h-5 mr-3" />
          {productSidebarTranslations.productTypeOptions.all[language]}
        </button>
        <button
          onClick={() => setActiveTypeTab("carbon_credits")}
          className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
            activeTypeTab === "carbon_credits"
              ? "bg-green-50 text-green-600"
              : "text-gray-700 hover:bg-gray-50"
          }`}
        >
          <Leaf className="w-5 h-5 mr-3" />
          {
            productSidebarTranslations.productTypeOptions.carbon_credits[
              language
            ]
          }
        </button>
        <button
          onClick={() => setActiveTypeTab("carbon_accounting")}
          className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
            activeTypeTab === "carbon_accounting"
              ? "bg-green-50 text-green-600"
              : "text-gray-700 hover:bg-gray-50"
          }`}
        >
          <BookOpen className="w-5 h-5 mr-3" />
          {
            productSidebarTranslations.productTypeOptions.carbon_accounting[
              language
            ]
          }
        </button>
        <button
          onClick={() => setActiveTypeTab("international_certificates")}
          className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
            activeTypeTab === "international_certificates"
              ? "bg-green-50 text-green-600"
              : "text-gray-700 hover:bg-gray-50"
          }`}
        >
          <Award className="w-5 h-5 mr-3" />
          {
            productSidebarTranslations.productTypeOptions
              .international_certificates[language]
          }
        </button>
      </div>

      <h3 className="font-medium text-lg mt-8 mb-4">
        {productSidebarTranslations.statusTitle[language]}
      </h3>
      <div className="space-y-2">
        <button
          onClick={() => setActiveTab("all")}
          className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
            activeTab === "all"
              ? "bg-green-50 text-green-600"
              : "text-gray-700 hover:bg-gray-50"
          }`}
        >
          {productSidebarTranslations.statusOptions.all[language]}
        </button>
        <button
          onClick={() => setActiveTab("active")}
          className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
            activeTab === "active"
              ? "bg-green-50 text-green-600"
              : "text-gray-700 hover:bg-gray-50"
          }`}
        >
          <CheckCircle2 className="w-4 h-4 mr-2 text-green-600" />
          {productSidebarTranslations.statusOptions.active[language]}
        </button>
        <button
          onClick={() => setActiveTab("pending")}
          className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
            activeTab === "pending"
              ? "bg-green-50 text-green-600"
              : "text-gray-700 hover:bg-gray-50"
          }`}
        >
          <Clock className="w-4 h-4 mr-2 text-yellow-600" />
          {productSidebarTranslations.statusOptions.pending[language]}
        </button>
        <button
          onClick={() => setActiveTab("expired")}
          className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
            activeTab === "expired"
              ? "bg-green-50 text-green-600"
              : "text-gray-700 hover:bg-gray-50"
          }`}
        >
          <AlertCircle className="w-4 h-4 mr-2 text-red-600" />
          {productSidebarTranslations.statusOptions.expired[language]}
        </button>
      </div>
    </div>
  );
}

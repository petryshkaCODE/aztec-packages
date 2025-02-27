// @ts-check

const fs = require("fs");
const path = require("path");

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
export default {
  sidebar: [
    {
      type: "html",
      value: '<span class="sidebar-title">Concepts</span>',
      className: "sidebar-title",
    },
    {
      type: "doc",
      id: "aztec/concepts_overview",
      label: "Concepts Overview",
    },
    {
      type: "category",
      label: "Concepts",
      items: [{ type: "autogenerated", dirName: "aztec/concepts" }],
    },
    {
      type: "html",
      value: '<span class="sidebar-title">Network</span>',
      className: "sidebar-title",
    },
    {
      type: "doc",
      id: "aztec/network_overview",
      label: "Network Overview",
    },
    {
      type: "category",
      label: "Network Infrastructure",
      items: [{ type: "autogenerated", dirName: "aztec/network" }],
    },
    {
      type: "html",
      value: '<span class="sidebar-title">Smart Contracts</span>',
      className: "sidebar-title",
    },
    {
      type: "doc",
      id: "aztec/smart_contracts_overview",
      label: "What are Smart Contracts?",
    },
    {
      type: "category",
      label: "Technical Details",
      items: [{ type: "autogenerated", dirName: "aztec/smart_contracts" }],
    },
    {
      type: "html",
      value: '<span class="sidebar-divider" />',
    },
    {
      type: "doc",
      id: "vision",
    },
    {
      type: "doc",
      label: "Building in Public",
      id: "aztec",
    },
  ],

  guidesSidebar: [
    {
      type: "doc",
      id: "guides/index",
      label: "Guides and Tutorials",
    },
    {
      type: "html",
      value: '<span class="sidebar-title">Getting Started</span>',
      className: "sidebar-title",
    },
    {
      type: "doc",
      label: "Quickstart",
      id: "guides/getting_started"
    },
    {
      type: "html",
      value: '<span class="sidebar-divider" />',
    },
    {
      type: "html",
      value: '<span class="sidebar-title">Code-along Tutorials</span>',
      className: "sidebar-title",
    },
    {
      type: "autogenerated",
      dirName: "tutorials/codealong",
    },
    {
      type: "html",
      value: '<span class="sidebar-title">Advanced Examples</span>',
      className: "sidebar-title",
    },
    {
      type: "autogenerated",
      dirName: "tutorials/examples",
    },
    {
      type: "html",
      value: '<span class="sidebar-divider" />',
    },
    {
      type: "html",
      value: '<span class="sidebar-title">How-to Guides</span>',
      className: "sidebar-title",
    },
    {
      type: "autogenerated",
      dirName: "guides/developer_guides"
    },
    {
      type: "html",
      value: '<span class="sidebar-divider" />',
    },
  ],

  referenceSidebar: [
    {
      type: "doc",
      label: "References",
      id: "reference/index",
    },
    {
      type: "html",
      value: '<span class="sidebar-title">Developer References</span>',
      className: "sidebar-title",
    },
    {
      type: "autogenerated",
      dirName: "reference/developer_references",
    },
    {
      type: "html",
      value: '<span class="sidebar-title">Considerations</span>',
      className: "sidebar-title",
    },
    {
      type: "doc",
      id: "migration_notes",
    },
    {
      type: "doc",
      label: "Privacy Considerations",
      id: "guides/privacy_considerations"
    },
    {
      type: "html",
      value: '<span class="sidebar-divider" />',
    },
    {
      type: "doc",
      id: "aztec_connect_sunset",
    },
  ],

  roadmapSidebar: [
    {
      type: "autogenerated",
      dirName: "aztec/roadmap",
    },
  ],
};

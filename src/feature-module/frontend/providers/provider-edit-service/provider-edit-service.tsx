import ProviderServiceFormPanel from "../../common/jobs/ProviderServiceFormPanel";

/**
 * GHST-47: provider create/edit service page. The previous multi-step static
 * template (mock images, demo SEO/pricing wizard, status modals) was replaced
 * by the live PocketBase-backed form panel. The panel handles both Add Service
 * (no `?id`) and Edit Service (`?id=<serviceId>`, owner-only via PB rules).
 */
const ProviderEditService = () => {
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <ProviderServiceFormPanel />
      </div>
    </div>
  );
};

export default ProviderEditService;

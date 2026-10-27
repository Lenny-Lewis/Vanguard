export interface ProjectService {
  name: string
  background: string
  approach: string
  idealFor: string
  deliverables: string[]
  scopeFactors: string
  inquiryType: string
}

export const projectServices: Record<string, ProjectService> = {
  'aura-kinetics': {
    name: 'Immersive Web & 3D',
    background: 'Interactive websites help people understand complex products by exploring them. Real-time 3D, motion, and clear product storytelling can turn technical features into an experience that feels tangible.',
    approach: 'For a platform like Aura Kinetics, the service connects robotics storytelling with a responsive digital experience. Discovery defines the key product interactions before design and development bring them to the browser.',
    idealFor: 'Technology companies, hardware launches, and brands that need to demonstrate how a product works.',
    deliverables: ['Experience strategy and user journeys', 'Responsive interface design', 'Interactive 3D scenes and motion direction', 'Frontend development and performance testing', 'Launch handover and content guidance'],
    scopeFactors: 'Number of scenes, complexity of 3D assets, content production, integrations, and device support.',
    inquiryType: 'Digital Flagship & Immersive 3D',
  },
  'valkyrie-motorsports': {
    name: 'Brand Identity & Film',
    background: 'A brand identity gives a business a consistent visual voice. Film adds movement, sound, and narrative so the same identity can carry across a product reveal, campaign, and everyday communications.',
    approach: 'For an automotive launch like Valkyrie, the service brings positioning, typography, and cinematic direction into one creative system. A shared concept keeps the identity and launch film connected.',
    idealFor: 'New brands, product launches, and established businesses preparing for a repositioning.',
    deliverables: ['Brand discovery and creative direction', 'Logo, typography, and color system', 'Brand guidelines and campaign applications', 'Film concept, script, and storyboard', 'Launch film and agreed social edits'],
    scopeFactors: 'Identity scope, film duration, shoot requirements, CGI, music licensing, and number of campaign formats.',
    inquiryType: 'Motion Design & Brand Film',
  },
  'neo-synthetic': {
    name: 'Digital Product Design',
    background: 'Digital product design makes software easier to understand and use. Research, information architecture, prototyping, and reusable interface components help teams turn complex workflows into clear decisions.',
    approach: 'For a workspace like Neo-Synthetic, the service starts with the tasks people need to complete. Flows and prototypes establish the interaction model before detailed screens and a design system support implementation.',
    idealFor: 'SaaS platforms, dashboards, customer portals, and teams building or improving an application.',
    deliverables: ['Product discovery and workflow mapping', 'Information architecture and wireframes', 'Interactive prototype', 'Responsive interface and component system', 'Developer handoff and usability review'],
    scopeFactors: 'Number of workflows, user roles, research needs, platform coverage, and whether development is included.',
    inquiryType: 'Digital Flagship & Immersive 3D',
  },
  'chrono-vault': {
    name: 'Editorial & Packaging',
    background: 'Editorial design organizes a brand’s story through typography, imagery, and layout. Packaging carries that story into a physical experience, with attention to materials, structure, and production.',
    approach: 'For a timepiece collection like Chrono Vault, the service connects product storytelling with the details of presentation and unboxing. Design development considers both the printed page and the physical object.',
    idealFor: 'Luxury collections, retail launches, product catalogs, and brands investing in their physical presentation.',
    deliverables: ['Editorial and packaging creative direction', 'Layout and typography system', 'Packaging concepts and artwork', 'Material and finish recommendations', 'Print-ready files and production specifications'],
    scopeFactors: 'Number of products and pages, packaging structures, photography, prototypes, and print production needs.',
    inquiryType: 'Brand Identity & Visual System',
  },
  'solaris-sound': {
    name: 'Spatial Interaction & Audio Interfaces',
    background: 'Spatial interaction connects controls, feedback, and movement across a physical or digital environment. Audio interfaces require particular care so people can understand what they hear and control it with confidence.',
    approach: 'For a sound synthesis interface like Solaris Audio, the service maps producer workflows and control behavior. Prototypes explore the relationship between visual feedback, physical gestures, and sound.',
    idealFor: 'Audio tools, connected hardware, creative software, and interactive installations.',
    deliverables: ['Workflow and interaction research', 'Control layout and interface concepts', 'Motion and feedback system', 'Interactive behavior prototype', 'Implementation specifications and handoff'],
    scopeFactors: 'Hardware integration, prototype fidelity, audio behavior, testing requirements, and supported devices.',
    inquiryType: 'Full Comprehensive Ecosystem',
  },
  'vortex-archives': {
    name: 'Fashion Editorial & Digital Experiences',
    background: 'Fashion editorial gives a collection a recognizable point of view through art direction, typography, and image sequencing. Digital experiences extend that language into responsive stories and interactive collection browsing.',
    approach: 'For a digital runway like Vortex Archives, the service translates the collection’s visual language into an editorial website. Layout and motion are developed around the imagery and the way visitors explore it.',
    idealFor: 'Fashion houses, collection launches, editorial platforms, and independent labels.',
    deliverables: ['Editorial concept and art direction', 'Digital lookbook and collection layouts', 'Responsive website design', 'Motion and interaction direction', 'Content publishing and launch handoff'],
    scopeFactors: 'Collection size, photography, video, ecommerce integration, and content management requirements.',
    inquiryType: 'Brand Identity & Visual System',
  },
  'hyperion-labs': {
    name: 'Deep-Tech Visual Identity',
    background: 'Technical businesses need identities that make specialist ideas understandable while building trust. Strategy, language, and a flexible visual system help explain the business consistently to customers, partners, and investors.',
    approach: 'For a space technology business like Hyperion Labs, the service translates complex capabilities into a clear identity. Technical discovery informs the brand story, visual direction, and communication templates.',
    idealFor: 'Science, aerospace, engineering, and enterprise technology businesses.',
    deliverables: ['Brand positioning and messaging foundations', 'Logo and visual identity system', 'Technical illustration direction', 'Presentation and communication templates', 'Brand guidelines and asset handoff'],
    scopeFactors: 'Research depth, number of audiences, illustration needs, brand architecture, and rollout materials.',
    inquiryType: 'Brand Identity & Visual System',
  },
  'obsidian-kin': {
    name: 'Luxury Showrooms & 3D Art',
    background: 'Digital showrooms use product imagery, 3D, and considered interaction to help visitors explore a collection. Lighting, materials, and detail views make craftsmanship easier to appreciate online.',
    approach: 'For a jewelry collection like Obsidian Kin, the service develops a visual environment around the objects. Art direction and product presentation guide the showroom experience and the assets needed to support it.',
    idealFor: 'Jewelry, luxury objects, collectible products, and appointment-led retail brands.',
    deliverables: ['Showroom concept and art direction', 'Product presentation and browsing design', '3D material and lighting studies', 'Responsive showroom development', 'Inquiry journey and launch handoff'],
    scopeFactors: 'Number of products, modeling complexity, rendering needs, configuration tools, and commerce integrations.',
    inquiryType: 'Digital Flagship & Immersive 3D',
  },
}

// These planning bands match the existing inquiry form; they are not fixed service rates.
export const projectBudgetBands = ['$30,000 - $50,000', '$50,000 - $100,000', '$100,000 - $250,000', '$250,000+']

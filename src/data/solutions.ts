import type { Localized } from '@/i18n/types'

export interface SolutionComponent {
  title: Localized
  desc: Localized
}

export interface Solution {
  slug: string
  icon: string
  name: Localized
  short: Localized
  overview: Localized
  painPoints: Localized[]
  components: SolutionComponent[]
  advantages: Localized[]
  industries: Localized[]
  process: Localized[]
}

export const solutions: Solution[] = [
  {
    slug: 'intelligent-welding',
    icon: 'welding',
    name: { zh: '智能焊接方案', en: 'Intelligent Welding Solution' },
    short: {
      zh: '机器人焊接工作站与产线，稳定高效、数据可追溯。',
      en: 'Robotic welding cells and lines with stable quality and traceable data.',
    },
    overview: {
      zh: '以焊接机器人、智能焊接电源和焊缝跟踪为核心，集成变位机、工装夹具与控制系统，提供从单机工作站到自动化焊接产线的整体方案，帮助企业摆脱对熟练焊工的依赖，实现焊接质量稳定与效率提升。',
      en: 'Built around welding robots, intelligent power sources and seam tracking, integrated with positioners, fixtures and control systems, we deliver total solutions from single cells to automatic welding lines, reducing reliance on skilled welders while stabilizing quality and raising throughput.',
    },
    painPoints: [
      { zh: '人工焊接质量不稳定，依赖熟练焊工且招工难。', en: 'Inconsistent manual quality and a shortage of skilled welders.' },
      { zh: '焊接环境恶劣，劳动强度大、安全风险高。', en: 'Harsh welding environment with high labor intensity and safety risks.' },
      { zh: '小批量多品种换型慢，参数与数据难追溯。', en: 'Slow changeover for high-mix production and hard-to-trace parameters.' },
    ],
    components: [
      { title: { zh: '焊接机器人与变位机', en: 'Welding Robots & Positioners' }, desc: { zh: '六轴机器人配合单/双轴变位，实现复杂焊缝可达。', en: '6-axis robots with positioners for complex seam access.' } },
      { title: { zh: '智能焊接电源', en: 'Intelligent Power Source' }, desc: { zh: '数字化焊接参数管理，支持多工艺存储调用。', en: 'Digital parameter management with multi-process presets.' } },
      { title: { zh: '焊缝跟踪与检测', en: 'Seam Tracking & Inspection' }, desc: { zh: '激光/视觉跟踪实时纠偏，在线质量检测。', en: 'Laser/vision tracking with real-time correction and inspection.' } },
      { title: { zh: '工装夹具与控制', en: 'Fixtures & Control' }, desc: { zh: '柔性夹具与产线控制系统，对接 MES。', en: 'Flexible fixtures and line control integrated with MES.' } },
    ],
    advantages: [
      { zh: '焊缝质量稳定一致，降低返修率。', en: 'Consistent weld quality with lower rework.' },
      { zh: '效率显著提升，可连续作业。', en: 'Markedly higher efficiency and continuous operation.' },
      { zh: '减少人工，改善作业环境。', en: 'Less labor and a safer working environment.' },
      { zh: '全程参数与质量数据可追溯。', en: 'Full traceability of parameters and quality data.' },
    ],
    industries: [
      { zh: '汽车及零部件', en: 'Automotive & Parts' },
      { zh: '工程机械', en: 'Construction Machinery' },
      { zh: '船舶海工', en: 'Shipbuilding & Marine' },
      { zh: '钢结构与压力容器', en: 'Steel Structures & Pressure Vessels' },
      { zh: '轨道交通', en: 'Rail Transit' },
    ],
    process: [
      { zh: '焊接工艺评估', en: 'Process Assessment' },
      { zh: '方案与产线设计', en: 'Solution & Line Design' },
      { zh: '装备制造与集成', en: 'Manufacturing & Integration' },
      { zh: '安装调试与试产', en: 'Installation & Trial Production' },
      { zh: '量产陪产与服务', en: 'Ramp-up Support & Service' },
    ],
  },

  {
    slug: 'intelligent-spraying',
    icon: 'spraying',
    name: { zh: '智能喷涂方案', en: 'Intelligent Spraying Solution' },
    short: {
      zh: '自动喷涂机器人与产线，膜厚均匀、绿色环保。',
      en: 'Automatic spraying robots and lines with uniform film and green operation.',
    },
    overview: {
      zh: '提供喷涂机器人、防爆喷房、供漆与自动换色、环保处理一体化的自动喷涂方案，通过精准轨迹与流量控制保证膜厚均匀、减少涂料浪费，实现绿色、连续、可快速换型的喷涂生产。',
      en: 'We provide integrated automatic spraying solutions with spraying robots, explosion-proof booths, paint supply and automatic color change, and environmental treatment. Precise path and flow control ensure uniform film thickness, reduce paint waste and enable green, continuous, fast-change production.',
    },
    painPoints: [
      { zh: '人工喷涂膜厚不均、一致性差。', en: 'Uneven film thickness and poor consistency.' },
      { zh: '漆雾和 VOC 危害健康，环保压力大。', en: 'Paint mist and VOCs harm health and raise compliance pressure.' },
      { zh: '涂料利用率低、浪费严重，换色慢。', en: 'Low paint utilization, heavy waste and slow color change.' },
    ],
    components: [
      { title: { zh: '喷涂机器人', en: 'Spraying Robots' }, desc: { zh: '防爆机器人配合离线/示教轨迹编程。', en: 'Explosion-proof robots with offline/teach programming.' } },
      { title: { zh: '喷房与防爆', en: 'Booth & Explosion-proof' }, desc: { zh: '干式/湿式喷房与防爆安全系统。', en: 'Dry/wet booths with explosion-proof safety.' } },
      { title: { zh: '供漆与换色', en: 'Paint Supply & Color Change' }, desc: { zh: '精准计量供漆，自动快速换色。', en: 'Metered supply with automatic rapid color change.' } },
      { title: { zh: '环保处理', en: 'Environmental Treatment' }, desc: { zh: '漆雾过滤与废气处理，达标排放。', en: 'Mist filtration and exhaust treatment for compliant emission.' } },
    ],
    advantages: [
      { zh: '膜厚均匀，外观一致性高。', en: 'Uniform film with high appearance consistency.' },
      { zh: '涂料利用率高，降低成本。', en: 'Higher paint utilization and lower cost.' },
      { zh: '绿色环保，达标排放。', en: 'Green operation with compliant emissions.' },
      { zh: '连续作业、快速换型。', en: 'Continuous operation with fast changeover.' },
    ],
    industries: [
      { zh: '汽车与零部件', en: 'Automotive & Parts' },
      { zh: '3C 电子', en: '3C Electronics' },
      { zh: '机械装备', en: 'Machinery & Equipment' },
      { zh: '五金与家具', en: 'Hardware & Furniture' },
      { zh: '航空航天', en: 'Aerospace' },
    ],
    process: [
      { zh: '喷涂工艺试验', en: 'Coating Trials' },
      { zh: '线体方案设计', en: 'Line Design' },
      { zh: '装备集成安装', en: 'Integration & Installation' },
      { zh: '试喷验证', en: 'Spray Validation' },
      { zh: '投产与服务', en: 'Production & Service' },
    ],
  },

  {
    slug: 'intelligent-grinding',
    icon: 'grinding',
    name: { zh: '智能打磨方案', en: 'Intelligent Grinding Solution' },
    short: {
      zh: '力控打磨机器人与自动磨抛单元，表面一致。',
      en: 'Force-controlled grinding robots and automatic cells with consistent finishes.',
    },
    overview: {
      zh: '以打磨抛光机器人、力控浮动装置和专用磨料工具为核心，配合视觉定位与除尘系统，实现铸件、焊缝、五金件等的自动化打磨抛光，解决人工打磨粉尘大、一致性差、招工难的问题。',
      en: 'Centered on grinding/polishing robots, force-controlled float devices and dedicated abrasives, combined with vision positioning and dust removal, we automate the grinding and polishing of castings, welds and hardware, solving the dust, inconsistency and labor-shortage problems of manual work.',
    },
    painPoints: [
      { zh: '人工打磨粉尘噪声大，职业病风险高。', en: 'Heavy dust and noise with high occupational-disease risk.' },
      { zh: '表面一致性差，过磨欠磨普遍。', en: 'Poor surface consistency with common over- and under-grinding.' },
      { zh: '招工难、人力成本持续上升。', en: 'Difficult hiring and rising labor costs.' },
    ],
    components: [
      { title: { zh: '打磨机器人', en: 'Grinding Robots' }, desc: { zh: '六轴机器人适配多姿态磨抛。', en: '6-axis robots for multi-pose grinding and polishing.' } },
      { title: { zh: '力控浮动装置', en: 'Force Control' }, desc: { zh: '恒力浮动，自适应曲面与公差。', en: 'Constant-force float adapting to curves and tolerances.' } },
      { title: { zh: '磨料与主轴', en: 'Abrasives & Spindles' }, desc: { zh: '专用磨料工具与高速电主轴。', en: 'Dedicated abrasives and high-speed spindles.' } },
      { title: { zh: '视觉定位与除尘', en: 'Vision & Dust Removal' }, desc: { zh: '视觉定位工件，配套除尘系统。', en: 'Vision-based positioning with dust extraction.' } },
    ],
    advantages: [
      { zh: '恒力控制，表面质量一致。', en: 'Constant force for consistent surface quality.' },
      { zh: '绿色安全，改善作业环境。', en: 'Greener and safer working environment.' },
      { zh: '降低人工与综合成本。', en: 'Lower labor and overall cost.' },
      { zh: '柔性适配多品种工件。', en: 'Flexible adaptation to a wide range of parts.' },
    ],
    industries: [
      { zh: '汽车零部件', en: 'Automotive Parts' },
      { zh: '五金卫浴', en: 'Hardware & Sanitary Ware' },
      { zh: '3C 电子', en: '3C Electronics' },
      { zh: '铸件与焊接件', en: 'Castings & Weldments' },
      { zh: '航空航天', en: 'Aerospace' },
    ],
    process: [
      { zh: '样件打磨试验', en: 'Sample Trials' },
      { zh: '工艺包开发', en: 'Process Package Development' },
      { zh: '单元集成', en: 'Cell Integration' },
      { zh: '调试与验收', en: 'Commissioning & Acceptance' },
      { zh: '量产支持', en: 'Production Support' },
    ],
  },

  {
    slug: 'laser-cladding',
    icon: 'laser',
    name: { zh: '激光熔覆方案', en: 'Laser Cladding Solution' },
    short: {
      zh: '激光熔覆与再制造，结合强、热影响小、寿命长。',
      en: 'Laser cladding and remanufacturing with strong bonding and minimal heat impact.',
    },
    overview: {
      zh: '提供激光熔覆设备、送粉系统与工艺软件，实现关键部件表面强化、磨损修复与再制造。熔覆层与基体冶金结合、热影响小、稀释率低，有效延长部件寿命、降低更换成本与停机损失。',
      en: 'We provide laser cladding equipment, powder feeding systems and process software for surface enhancement, wear repair and remanufacturing of key components. The cladding forms a metallurgical bond with minimal heat impact and low dilution, effectively extending component life and reducing replacement cost and downtime.',
    },
    painPoints: [
      { zh: '关键部件磨损快，更换成本高。', en: 'Rapid wear of key parts with high replacement cost.' },
      { zh: '传统修复结合强度低、易脱落。', en: 'Traditional repair offers weak bonding and tends to detach.' },
      { zh: '停机损失大，再制造能力不足。', en: 'Heavy downtime losses and insufficient remanufacturing capability.' },
    ],
    components: [
      { title: { zh: '高功率激光器', en: 'High-power Laser' }, desc: { zh: '半导体/光纤激光器，稳定能量输出。', en: 'Diode/fiber lasers with stable energy output.' } },
      { title: { zh: '熔覆头与送粉', en: 'Cladding Head & Feeder' }, desc: { zh: '同轴熔覆头与精准送粉系统。', en: 'Coaxial heads with precision powder feeding.' } },
      { title: { zh: '运动机构', en: 'Motion System' }, desc: { zh: '机器人/机床多轴联动加工。', en: 'Robot/machine multi-axis coordinated processing.' } },
      { title: { zh: '工艺软件', en: 'Process Software' }, desc: { zh: '路径规划与工艺参数库。', en: 'Path planning and process parameter libraries.' } },
    ],
    advantages: [
      { zh: '冶金结合，结合强度高。', en: 'Metallurgical bonding with high strength.' },
      { zh: '热影响区小，变形小。', en: 'Small heat-affected zone and minimal distortion.' },
      { zh: '稀释率低，性能可控。', en: 'Low dilution with controllable properties.' },
      { zh: '可再制造，显著延长寿命。', en: 'Remanufacturing capability that extends service life.' },
    ],
    industries: [
      { zh: '模具行业', en: 'Molding & Tooling' },
      { zh: '能源电力', en: 'Energy & Power' },
      { zh: '航空航天', en: 'Aerospace' },
      { zh: '矿山与冶金', en: 'Mining & Metallurgy' },
      { zh: '石油化工', en: 'Petrochemical' },
    ],
    process: [
      { zh: '部件检测评估', en: 'Component Inspection' },
      { zh: '熔覆工艺设计', en: 'Process Design' },
      { zh: '熔覆加工', en: 'Cladding Processing' },
      { zh: '后处理与检测', en: 'Post-processing & Testing' },
      { zh: '交付与跟踪', en: 'Delivery & Tracking' },
    ],
  },

  {
    slug: 'intelligent-logistics-warehousing',
    icon: 'logistics',
    name: { zh: '智能物流与仓储', en: 'Intelligent Logistics & Warehousing' },
    short: {
      zh: 'AGV/AMR 与立体仓库，自动化、库存精准。',
      en: 'AGV/AMR and automated storage with accurate inventory.',
    },
    overview: {
      zh: '以 AGV/AMR、立体仓库、输送分拣和 WMS/WCS 调度为核心，构建厂内智能物流与仓储系统，实现物料自动搬运、库存精准管理与信息透明，打通产线与仓储，提升整体运营效率。',
      en: 'Built around AGV/AMR, automated storage, conveying and sorting, and WMS/WCS scheduling, we build in-plant intelligent logistics and warehousing systems that enable automatic material handling, accurate inventory and transparent information, connecting lines with storage to improve overall operational efficiency.',
    },
    painPoints: [
      { zh: '人工搬运效率低、出错率高。', en: 'Low efficiency and high error rates in manual handling.' },
      { zh: '库存不准，盘点耗时、信息孤岛。', en: 'Inaccurate inventory, time-consuming counts and information silos.' },
      { zh: '人力成本上升，柔性不足。', en: 'Rising labor costs and insufficient flexibility.' },
    ],
    components: [
      { title: { zh: 'AGV / AMR', en: 'AGV / AMR' }, desc: { zh: '多类型移动机器人，智能导航调度。', en: 'Various mobile robots with intelligent navigation and scheduling.' } },
      { title: { zh: '立体仓库', en: 'Automated Storage' }, desc: { zh: '货架、堆垛机与自动存取。', en: 'Racking, stacker cranes and automatic put-away/picking.' } },
      { title: { zh: '输送分拣', en: 'Conveying & Sorting' }, desc: { zh: '自动输送线与分拣系统。', en: 'Automatic conveyors and sorting systems.' } },
      { title: { zh: 'WMS / WCS', en: 'WMS / WCS' }, desc: { zh: '仓储管理与设备调度系统。', en: 'Warehouse management and equipment control systems.' } },
    ],
    advantages: [
      { zh: '搬运自动化，效率高。', en: 'Automated handling with high efficiency.' },
      { zh: '库存精准，实时可视。', en: 'Accurate inventory with real-time visibility.' },
      { zh: '柔性调度，适应变化。', en: 'Flexible scheduling that adapts to changes.' },
      { zh: '减少人工，安全可靠。', en: 'Reduced labor with safe, reliable operation.' },
    ],
    industries: [
      { zh: '离散制造', en: 'Discrete Manufacturing' },
      { zh: '汽车与 3C', en: 'Automotive & 3C' },
      { zh: '医药与食品', en: 'Pharma & Food' },
      { zh: '电商与零售', en: 'E-commerce & Retail' },
      { zh: '新能源', en: 'New Energy' },
    ],
    process: [
      { zh: '物流规划设计', en: 'Logistics Planning' },
      { zh: '系统方案设计', en: 'System Design' },
      { zh: '设备部署集成', en: 'Deployment & Integration' },
      { zh: '系统联调', en: 'System Commissioning' },
      { zh: '运营与优化', en: 'Operation & Optimization' },
    ],
  },

  {
    slug: 'online-inspection',
    icon: 'inspection',
    name: { zh: '在线检测方案', en: 'Online Inspection Solution' },
    short: {
      zh: '机器视觉与在线测量，全检、高精度、可追溯。',
      en: 'Machine vision and online measurement with full inspection and traceability.',
    },
    overview: {
      zh: '基于工业相机、光源、传感器和视觉算法平台，提供在线尺寸测量、外观缺陷检测和自动判定方案，实现产品 100% 全检、实时反馈与数据追溯，并与产线联动形成质量闭环。',
      en: 'Based on industrial cameras, lighting, sensors and vision algorithm platforms, we provide online dimensional measurement, appearance defect detection and automatic judgment, enabling 100% inspection, real-time feedback and data traceability, linked with the line to form a closed quality loop.',
    },
    painPoints: [
      { zh: '人工抽检易漏检，标准不一。', en: 'Manual sampling misses defects with inconsistent standards.' },
      { zh: '检测效率低，跟不上产线节拍。', en: 'Low inspection efficiency unable to keep up with line takt.' },
      { zh: '数据难追溯，无法闭环改进。', en: 'Hard-to-trace data with no closed-loop improvement.' },
    ],
    components: [
      { title: { zh: '工业相机与光源', en: 'Cameras & Lighting' }, desc: { zh: '高分辨率相机与专用光源方案。', en: 'High-resolution cameras with dedicated lighting.' } },
      { title: { zh: '传感器', en: 'Sensors' }, desc: { zh: '3D/激光等多类传感测量。', en: '3D/laser and other sensing measurement.' } },
      { title: { zh: '视觉算法平台', en: 'Vision Platform' }, desc: { zh: '缺陷检测与测量算法，可训练。', en: 'Trainable defect detection and measurement algorithms.' } },
      { title: { zh: '自动判定与联动', en: 'Auto Judgment & Integration' }, desc: { zh: 'OK/NG 自动分拣，对接产线。', en: 'Automatic OK/NG sorting integrated with the line.' } },
    ],
    advantages: [
      { zh: '100% 全检，减少漏检。', en: '100% inspection with fewer escapes.' },
      { zh: '高精度、高速度。', en: 'High precision and high speed.' },
      { zh: '实时反馈，数据可追溯。', en: 'Real-time feedback with traceable data.' },
      { zh: '联动产线，质量闭环。', en: 'Line integration for a closed quality loop.' },
    ],
    industries: [
      { zh: '3C 电子', en: '3C Electronics' },
      { zh: '汽车与零部件', en: 'Automotive & Parts' },
      { zh: '新能源', en: 'New Energy' },
      { zh: '精密制造', en: 'Precision Manufacturing' },
      { zh: '医药包装', en: 'Pharma Packaging' },
    ],
    process: [
      { zh: '检测需求分析', en: 'Inspection Requirement Analysis' },
      { zh: '方案与选型', en: 'Solution & Selection' },
      { zh: '算法训练验证', en: 'Algorithm Training & Validation' },
      { zh: '产线集成', en: 'Line Integration' },
      { zh: '上线与迭代', en: 'Launch & Iteration' },
    ],
  },
]

export const getSolution = (slug: string) => solutions.find((s) => s.slug === slug)

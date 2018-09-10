const viewTypeConfigs = [
  {
    key: 'CenterMonth',
    title: '成本中心（当月）',
    params: {
      type: 'chengben',
      is_sum: 0
    },
    filterTableColums: [
      {
        title: '成本中心类别',
        key: 'chenglei'
      },
      {
        title: '成本中心',
        key: 'chengben'
      },
      {
        title: '润色状态',
        key: 'status'
      }
    ],
    filterTableIdKey: 'chengben',
    reportEditOptionKey: 'chengben',
    optionTips: '选择成本中心编码',
    reasonAmountPreviewTableColums: [
      {
        title: '原因类别',
        key: 'reason'
      },
      {
        title: '影响金额',
        key: 'amount'
      }
    ]
  },
  {
    key: 'CenterTotal',
    title: '成本中心（累计）',
    params: {
      type: 'chengben',
      is_sum: 1
    },
    filterTableColums: [
      {
        title: '成本中心类别',
        key: 'chenglei'
      },
      {
        title: '成本中心',
        key: 'chengben'
      },
      {
        title: '润色状态',
        key: 'status'
      }
    ],
    filterTableIdKey: 'chengben',
    reportEditOptionKey: 'chengben',
    optionTips: '选择成本中心编码',
    reasonAmountPreviewTableColums: [
      {
        title: '原因类别',
        key: 'reason'
      },
      {
        title: '影响金额',
        key: 'amount'
      }
    ]
  },
  {
    key: 'CenterClassMonth',
    title: '成本中心类别（当月）',
    params: {
      type: 'chenglei',
      is_sum: 0
    },
    filterTableColums: [
      {
        title: '成本中心类别',
        key: 'chenglei'
      },
      {
        title: '润色状态',
        key: 'status'
      }
    ],
    filterTableIdKey: 'chenglei',
    reportEditOptionKey: 'chenglei',
    optionTips: '选择成本中心类别',
    reasonAmountPreviewTableColums: [
      {
        title: '成本中心',
        key: 'chengben'
      },
      {
        title: '差异',
        key: 'amount',
        type: 'amount'
      },
      {
        title: '解释原因',
        key: 'reason',
        type: 'array'
      }
    ]
  },
  {
    key: 'CenterClassTotal',
    title: '成本中心类别（累计）',
    params: {
      type: 'chenglei',
      is_sum: 1
    },
    filterTableColums: [
      {
        title: '成本中心类别',
        key: 'chenglei'
      },
      {
        title: '润色状态',
        key: 'status'
      }
    ],
    filterTableIdKey: 'chenglei',
    reportEditOptionKey: 'chenglei',
    optionTips: '选择成本中心类别',
    reasonAmountPreviewTableColums: [
      {
        title: '成本中心',
        key: 'chengben'
      },
      {
        title: '差异',
        key: 'amount',
        type: 'amount'
      },
      {
        title: '解释原因',
        key: 'reason',
        type: 'array'
      }
    ]
  },
  {
    key: 'CompanyMonth',
    title: '公司（当月）',
    params: {
      type: 'gongsi',
      is_sum: 0
    },
    noCompanySelect: true,
    filterTableColums: [
      {
        title: '公司名称',
        key: 'gongsi_sx'
      },
      {
        title: '润色状态',
        key: 'status'
      }
    ],
    filterTableIdKey: 'gongsi_sx',
    reportEditOptionKey: 'company',
    optionTips: '选择公司',
    reasonAmountPreviewTableColums: [
      {
        title: '成本中心类别',
        key: 'chenglei'
      },
      {
        title: '差异',
        key: 'amount',
        type: 'amount'
      },
      {
        title: '差异%',
        key: 'amount_percent',
        type: 'percent'
      },
      {
        title: '解释原因',
        key: 'reason',
        type: 'array'
      }
    ]
  },
  {
    key: 'CompanyTotal',
    title: '公司（累计）',
    params: {
      type: 'gongsi',
      is_sum: 1
    },
    noCompanySelect: true,
    filterTableColums: [
      {
        title: '公司',
        key: 'gongsi_sx'
      },
      {
        title: '润色状态',
        key: 'status'
      }
    ],
    filterTableIdKey: 'gongsi_sx',
    reportEditOptionKey: 'company',
    optionTips: '选择公司',
    reasonAmountPreviewTableColums: [
      {
        title: '成本中心类别',
        key: 'chenglei'
      },
      {
        title: '差异',
        key: 'amount',
        type: 'amount'
      },
      {
        title: '差异%',
        key: 'amount_percent',
        type: 'percent'
      },
      {
        title: '解释原因',
        key: 'reason',
        type: 'array'
      }
    ]
  }
]

export { viewTypeConfigs }

export default {
  getConfig (viewType) {
    return viewTypeConfigs.find(o => o.key === viewType)
  },
  getDefaultConfig () {
    return viewTypeConfigs[0]
  }
}

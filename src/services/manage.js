import ajaxBase from './ajaxBase'

const getSourceWorkTableList = () => {
  return ajaxBase.get('/input/excelconfig/getlist', {
    params: {
      class: 'base'
    }
  })
}

const getJournalDataHeader = () => {
  return ajaxBase.get('input/excelconfig/getlist', {
    params: {
      class: 'xushizhang'
    }
  })
}

const getBudgetDataHeader = () => {
  return ajaxBase.get('input/excelconfig/getlist', {
    params: {
      class: 'yusuan'
    }
  })
}

const getPreviewDataList = (params) => {
  return ajaxBase.get('input/exceldata/getlist', {
    params: params
  })
}

const getGlobalConfigList = () => {
  return ajaxBase.get('/input/param/getlist', {
    params: {
      class: 'base'
    }
  })
}

const saveGlobalConfigList = (data) => {
  return ajaxBase.post('/input/param/savedata', data)
}

const uploadExcel = (params, data) => {
  return ajaxBase.request({
    method: 'post',
    url: '/input/excelfile/upload',
    data: data,
    params: params,
    headers: {
      'Content-Type': undefined
    },
    transformRequest: [function (data, headers) { // 如果需要转换数据
      return data
    }]
  })

  // var request = new XMLHttpRequest()
  // request.open('POST', ajaxBase.defaults.baseURL + '/input/excelfile/upload?' + qs.stringify(ajaxBase.defaults.params))

  // request.send(data)
}

const forceRecoverData = (data) => {
  return ajaxBase.post('/input/excelfile/force', data)
}

const clearData = (data) => {
  return ajaxBase.post('/input/exceldata/clear', data)
}

const deleteData = (data) => {
  return ajaxBase.post('/input/exceldata/delete', data)
}

const getProblemDataList = (data) => {
  return ajaxBase.get('/chart/chartdata/getdata', data)
}

export default {
  getSourceWorkTableList,
  getGlobalConfigList,
  saveGlobalConfigList,
  getJournalDataHeader,
  getBudgetDataHeader,
  getPreviewDataList,
  uploadExcel,
  forceRecoverData,
  clearData,
  deleteData,
  getProblemDataList
}

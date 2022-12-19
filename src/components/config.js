// 组件基本配置
export const componentConfigs = [
  {
    id: 0,
    // 自定义配置
    __config__: {
      label: '单行文本',
      labelWidth: null,
      tag: 'el-input',
      defaultValue: undefined,
      required: true,
      layout: 'ColFormItem',
      span: 24,
    },
    // 插槽属性
    __slot__: {
      prepend: '',
      append: ''
    },
    // 组件自身属性
    placeholder: '请输入',
    style: { width: '100%' },
    clearable: true,
    readonly: false,
    disabled: false
  },
  {
    id: 1,
    __config__: {
      label: '多行文本',
      labelWidth: null,
      tag: 'el-input',
      defaultValue: undefined,
      required: true,
      layout: 'ColFormItem',
      span: 24,
    },
    type: 'textarea',
    placeholder: '请输入',
    autosize: {
      minRows: 2,
      maxRows: 4
    },
    style: { width: '100%' },
    readonly: false,
    disabled: false
  },
  {
    id: 2,
    __config__: {
      label: '下拉选择',
      showLabel: true,
      labelWidth: null,
      tag: 'el-select',
      required: true,
      layout: 'ColFormItem',
      span: 24,
    },
    __slot__: {
      options: [{
        label: '选项一',
        value: 1
      }, {
        label: '选项二',
        value: 2
      }]
    },
    placeholder: '请选择',
    style: { width: '100%' },
    clearable: true,
    disabled: false,
  },
  {
    id: 3,
    __config__: {
      label: '单选框组',
      labelWidth: null,
      tag: 'el-radio-group',
      changeTag: true,
      defaultValue: undefined,
      layout: 'ColFormItem',
      span: 24,
      optionType: 'default',
      required: true,
      border: false,
    },
    __slot__: {
      options: [{
        label: '选项一',
        value: 1
      }, {
        label: '选项二',
        value: 2
      }]
    },
    style: {},
    disabled: false
  },
  {
    id: 4,
    __config__: {
      label: '多选框组',
      tag: 'el-checkbox-group',
      defaultValue: [],
      span: 24,
      labelWidth: null,
      layout: 'ColFormItem',
      optionType: 'default',
      required: true,
      border: false,
    },
    __slot__: {
      options: [{
        label: '选项一',
        value: 1
      }, {
        label: '选项二',
        value: 2
      }]
    },
    style: {},
    disabled: false
  },
]
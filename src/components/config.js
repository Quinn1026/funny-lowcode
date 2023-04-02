// 组件基本配置
export const componentConfigs = [
  {
    id: 0,
    type: 'input',
    label: '单行文本',
    tag: 'el-input',
    layout: 'colFormItem',
    labelWidth: null,
    defaultValue: undefined,
    required: true,
    span: 24,
    placeholder: '请输入',
    style: { width: '100%' },
    clearable: true,
    readonly: false,
    disabled: false
  },
  {
    id: 1,
    type: 'textarea',
    label: '多行文本',
    tag: 'el-input',
    layout: 'colFormItem',
    labelWidth: null,
    defaultValue: undefined,
    required: true,
    span: 24,
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
    type: 'select',
    label: '下拉选择',
    tag: 'el-select',
    layout: 'colFormItem',
    showLabel: true,
    labelWidth: null,
    required: true,
    span: 24,
    options: [
      {
        label: '选项一',
        value: 1
      },
      {
        label: '选项二',
        value: 2
      }
    ],
    placeholder: '请选择',
    style: { width: '100%' },
    clearable: true,
    disabled: false,
  },
  {
    id: 3,
    type: 'radio',
    label: '单选框组',
    tag: 'el-radio-group',
    layout: 'colFormItem',
    labelWidth: null,
    changeTag: true,
    defaultValue: undefined,
    span: 24,
    optionType: 'default',
    required: true,
    border: false,
    options: [
      {
        label: '选项一',
        value: 1
      },
      {
        label: '选项二',
        value: 2
      }
    ],
    style: {},
    disabled: false
  },
  {
    id: 4,
    type: 'checkbox',
    label: '多选框组',
    tag: 'el-checkbox-group',
    layout: 'colFormItem',
    labelWidth: null,
    defaultValue: [],
    span: 24,
    optionType: 'default',
    required: true,
    border: false,
    options: [
      {
        label: '选项一',
        value: 1
      },
      {
        label: '选项二',
        value: 2
      }
    ],
    style: {},
    disabled: false
  },
]
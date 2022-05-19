import { Timeline } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons'

export default function Program() {
  return (
    <div className="pt-32 overflow-hidden">
      <Timeline mode="alternate">
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item dot={<div>1</div>}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem sunt
          explicabo.
        </Timeline.Item>
        <Timeline.Item color="red">
          Network problems being solved 2015-09-01
        </Timeline.Item>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item
          dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}
        >
          Technical testing 2015-09-01
        </Timeline.Item>
        <Timeline.Item
          dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}
        >
          Technical testing 2015-09-01
        </Timeline.Item>
        <Timeline.Item
          dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}
        >
          Technical testing 2015-09-01
        </Timeline.Item>
        <Timeline.Item
          dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}
        >
          Technical testing 2015-09-01
        </Timeline.Item>
        <Timeline.Item
          dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}
        >
          Technical testing 2015-09-01
        </Timeline.Item>
      </Timeline>
    </div>
  )
}

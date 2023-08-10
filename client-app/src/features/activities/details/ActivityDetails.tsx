import { Button, Card, Image } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponents";

export default function ActivityDetails() {
  const { activityStore } = useStore();
  const {
    cancelSelectActivity,
    openForm,
    selectedActivity: activity,
  } = activityStore;
  if (!activity) return <LoadingComponent />;
  return (
    <Card fluid>
      <Image
        src={`assets/categoryImages/${activity.category}.jpg`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span className="date">{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button
            basic
            color="blue"
            content="Edit"
            onClick={() => openForm(activity.id)}
          />
          <Button
            basic
            color="grey"
            content="Cancel"
            onClick={cancelSelectActivity}
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
}

import { SyntheticEvent, useState } from "react";
import {
  Segment,
  Button,
  Item,
  ItemContent,
  ItemDescription,
  ItemExtra,
  ItemHeader,
  ItemMeta,
  Label,
} from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import { Link } from "react-router-dom";

export default function ActivityList() {
  const [target, setTarget] = useState("");
  const { activityStore } = useStore();
  const { activitiesByDate, loading, deleteActivity } = activityStore;

  function handleActivityDelete(
    event: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) {
    setTarget(event.currentTarget.name);
    deleteActivity(id);
  }

  return (
    <Segment>
      <Item.Group divided>
        {activitiesByDate.map((activity) => (
          <Item key={activity.id}>
            <ItemContent>
              <ItemHeader as="a">{activity.title}</ItemHeader>
              <ItemMeta>{activity.date}</ItemMeta>
              <ItemDescription>
                <div>{activity.description}</div>
                <div>
                  {activity.city}, {activity.venue}
                </div>
              </ItemDescription>
              <ItemExtra>
                <Button
                  floated="right"
                  content="View"
                  color="blue"
                  as={Link}
                  to={`/activities/${activity.id}`}
                ></Button>
                <Button
                  floated="right"
                  content="Delete"
                  color="red"
                  name={activity.id}
                  loading={loading && target === activity.id}
                  onClick={(e) => handleActivityDelete(e, activity.id)}
                ></Button>
                <Label basic content={activity.category} />
              </ItemExtra>
            </ItemContent>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
}

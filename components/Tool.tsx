import { gql } from '@apollo/client';
import { Avatar, Grid, ListItem as MUIListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { useToolQuery } from 'types/gen/graphql-types';
import Link from './link/Link';
import Media from './Media';

export type Link = {
  label: string;
  href: string;
  as?: string;
};

type ToolProps = {
  id: string;
};

export const QUERY_TOOL = gql`
  query Tool($id: String!) {
    tool(where: { id: $id }) {
      id
      name
      description
      link
      image
    }
  }
`;

export default function Tool({ id }: ToolProps) {
  const { data } = useToolQuery({
    variables: {
      id,
    },
  });

  const name = data?.tool?.name ?? '';
  const image = data?.tool?.image;
  const link = {
    href: '/tool/[id]',
    as: `/tool/${id}`,
    label: 'Learn More',
  };

  return (
    <MUIListItem divider>
      <Grid container alignItems="center">
        <ListItemAvatar>
          <Avatar alt={name} sx={(theme) => ({ backgroundColor: theme.palette.grey[100] })}>
            {/* NextJS Image optimization example. Props are src(any file under the public dir), width, and height */}
            <Media image={image} name={name} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText>
          <Typography variant="body1">{name}</Typography>
        </ListItemText>
        <Grid
          container
          item
          xs={12}
          md={3}
          sx={(theme) => ({ justify: 'center', padding: theme.spacing(2) })}
          justifyContent="flex-end"
          alignItems="center"
        >
          {<Link href={link.href} as={link?.as} label={link.label} />}
        </Grid>
      </Grid>
    </MUIListItem>
  );
}

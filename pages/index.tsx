import { gql } from '@apollo/client';
import { Button, Grid, List, Typography } from '@mui/material';
import ToolDialog from 'components/dialog/ToolDialog';
import Layout from 'components/layout';
import Tool from 'components/Tool';
import { useState } from 'react';
import { useToolsQuery } from 'types/gen/graphql-types';
import { withUser } from '../hoc/withUser';
import type { User } from 'types/user';

export const QUERY_TOOLS = gql`
  query Tools {
    tools(orderBy: { name: asc }) {
      id
      name
      description
      link
      image
    }
  }
`;

export default function Home({ user }: { user?: User  | null; }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { data } = useToolsQuery({
    skip: !user
  });

  if (!user) {
    return (
      <>
        <Layout title="Boiler">
          <Grid container spacing={4} direction="column" sx={{ padding: '2em' }}>
            <Grid item container spacing={4} direction="column">
              <Grid
                item
                container
                spacing={4}
                alignContent="center"
                justifyContent="center"
                direction="column"
              >
                <Grid item container justifyContent="center">
                  <Button
                    variant="contained"
                    href='/api/auth/login'
                    color="primary"
                    component="a"
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Layout>
      </>
    );
  }

  return (
    <>
      <Layout title="Boiler">
        <Grid container spacing={4} direction="column" sx={{ padding: '2em' }}>
          <Grid item container spacing={4} direction="column">
            <Grid
              item
              container
              spacing={4}
              alignContent="center"
              justifyContent="center"
              direction="column"
            >
              <Grid item container justifyContent="center">
                <Typography variant="h5" component="h2">
                  Tools
                </Typography>
              </Grid>
              <Grid item container justifyContent="center">
                <Button variant="contained" color="primary" onClick={() => setDialogOpen(true)}>
                  Create
                </Button>
              </Grid>
              <ToolDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
            </Grid>
            <Grid item container justifyContent="center">
              <List
                aria-label={data?.tools.map((tool) => tool.name).join(', ')}
                sx={(theme) => ({
                  minWidth: theme.breakpoints.values.sm,
                  [theme.breakpoints.down('sm')]: {
                    width: '100%',
                    minWidth: 100,
                  },
                })}
              >
                {data?.tools.map(({ id }) => <Tool id={id} />)}
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}

export const getServerSideProps = withUser({ redirectIfUnauthenticated: false });

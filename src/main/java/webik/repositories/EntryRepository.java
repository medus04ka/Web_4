package webik.repositories;

import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import webik.entities.Entry;
import webik.entities.User;

import java.util.List;

public interface EntryRepository extends JpaRepository<Entry, Long> {
    List<Entry> findByUser(User user);

    @Transactional
    long deleteByUser(User user);
}
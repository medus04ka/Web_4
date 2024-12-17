package webik.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.security.core.GrantedAuthority;

import java.util.List;

@Data
@NoArgsConstructor
@Entity
@Table(name = "web4_role")
public class Role implements GrantedAuthority {
    @Id
    @SequenceGenerator(name="web4_role_id_seq", sequenceName = "web4_role_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "web4_role_id_seq")
    @JsonIgnore
    private long id;

    private String name;

    @ManyToMany(mappedBy = "roles")
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    @JsonIgnore
    private List<User> users;

    @Override
    public String getAuthority() {
        return name;
    }
}